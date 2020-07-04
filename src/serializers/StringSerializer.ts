export default class StringSerializer implements SerializerInterface {
  serialize(data: object) {
    return 'serialized';
  }

  deserialize(data: object) {
    return 'deserialized';
  }
}
