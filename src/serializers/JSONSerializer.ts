/* eslint-disable class-methods-use-this */
export default class StringSerializer implements SerializerInterface {
  serialize(data: object): string {
    return JSON.stringify(data, null, 2);
  }

  deserialize(data: string): object {
    return JSON.parse(data);
  }
}
