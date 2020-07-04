interface AdapterInterface {
  read: () => object;
  write: (data: object) => void;
}

interface SerializerInterface {
  serialize: (data: object) => unknown;
  deserialize: (data: object) => unknown;
}
