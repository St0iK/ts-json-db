interface AdapterInterface {
  read: () => object;
  write: (data: object) => void;
}
