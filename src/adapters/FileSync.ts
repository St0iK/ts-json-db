import { readFileSync, writeFileSync, existsSync } from 'fs';

function stringify(obj) {
  return JSON.stringify(obj, null, 2);
}

export default class FileSyncAdapter implements AdapterInterface {
  private source: string;

  private defaultValue: object;

  private serialize: Function;

  private deserialize: Function;

  constructor(source: string, { defaultValue = {}, serialize = stringify, deserialize = JSON.parse } = {}) {
    this.source = source;
    this.defaultValue = defaultValue;
    this.serialize = serialize;
    this.deserialize = deserialize;
  }

  read() {
    if (existsSync(this.source)) {
      try {
        const data = readFileSync(this.source, 'utf-8').trim();
        // Handle blank file
        return data ? this.deserialize(data) : this.defaultValue;
      } catch (e) {
        if (e instanceof SyntaxError) {
          e.message = `Malformed JSON in file: ${this.source}\n${e.message}`;
        }
        throw e;
      }
    }

    // Initialize
    writeFileSync(this.source, this.serialize(this.defaultValue));
    return this.defaultValue;
  }

  write(data: object): void {
    console.log({ data });
    writeFileSync(this.source, this.serialize(data));
  }
}
