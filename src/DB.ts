export default class DB {
  adapter: AdapterInterface;

  constructor(adapter: AdapterInterface) {
    this.adapter = adapter;
  }

  write(data: object) {
    this.adapter.write(data);
    console.log('Writing some stuff');
    console.log({ data });
  }

  read() {
    return this.adapter.read();
  }
}
