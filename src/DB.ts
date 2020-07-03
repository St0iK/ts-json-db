import { LoDashStatic } from 'lodash';

export default class DB {
  private lodash: LoDashStatic;
  private chain: any;

  private adapter: AdapterInterface;

  constructor(lodash: LoDashStatic, adapter: AdapterInterface) {
    this.lodash = lodash;
    this.chain = this.lodash.chain({ test: 1 });
    this.adapter = adapter;
  }

  plant(state: object) {
    console.log({ state });
    // eslint-disable-next-line no-underscore-dangle
    // this.chain.__wrapped__ = state;
    this.chain.map((n, i) => console.log({ n, i })).value();
    console.log(this.chain);
    return this.chain;
  }

  write(data: object) {
    this.adapter.write(data);

    console.log('Writing some stuff');
    console.log({ data });
  }

  read() {
    const d = this.adapter.read();
    return this.plant(d);
  }
}
