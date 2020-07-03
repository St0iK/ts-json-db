interface Params {
  isValid: boolean;
}

interface AdapterInterface {
  read: () => object;
  write: (data: object) => void;
}
