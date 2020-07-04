interface AdapterInterface {
  read: () => object;
  write: (data: object) => void;
}

interface SerializerInterface {
  serialize: (data: object) => string;
  deserialize: (data: string) => object;
}
