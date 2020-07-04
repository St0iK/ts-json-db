import { readFileSync, writeFileSync, existsSync } from 'fs';
import StringSerializer from '../serializers/StringSerializer';

function stringify(obj) {
  return JSON.stringify(obj, null, 2);
}

export default class FileSyncAdapter implements AdapterInterface {
  private source: string;

  private defaultValue: object;

  private serializer: SerializerInterface;

  private deserialize: Function;

  constructor(source: string, { defaultValue = {} } = {}, serializer: SerializerInterface = new StringSerializer()) {
    this.source = source;
    this.defaultValue = defaultValue;
    this.serializer = serializer;
  }

  read() {
    if (existsSync(this.source)) {
      try {
        const data = readFileSync(this.source, 'utf-8').trim();
        // Handle blank file
        return data ? this.serializer.deserialize(data) : this.defaultValue;
      } catch (e) {
        if (e instanceof SyntaxError) {
          e.message = `Malformed JSON in file: ${this.source}\n${e.message}`;
        }
        throw e;
      }
    }

    // Initialize
    writeFileSync(this.source, this.serializer.serialize(this.defaultValue));
    return this.defaultValue;
  }

  write(data: object): void {
    console.log({ data });
    writeFileSync(this.source, this.serializer.serialize(data));
  }
}
