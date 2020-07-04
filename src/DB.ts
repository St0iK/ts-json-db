import { ObjectChain, LoDashStatic } from 'lodash';
// Taken from https://github.com/typicode/lowdb/blob/master/src/main.js
import * as lodash from 'lodash';
import isPromise from 'is-promise';

export default (adapter: AdapterInterface) => {
  // Create a fresh copy of lodash
  const _: LoDashStatic = lodash.runInContext();
  const db: ObjectChain<object> = _.chain({});

  // Add write function to lodash
  // Calls save before returning result
  _.prototype.write = _.wrap(_.prototype.value, function (func: Function): object {
    const funcRes: Function = func.apply(this);
    return db.write(funcRes);
  });

  const plant: (state: object) => ObjectChain<object> = (state: object): ObjectChain<object> => {
    db.__wrapped__ = state;
    return db;
  };

  // Expose _ for mixins
  db._ = _;

  db.read = () => {
    const r = adapter.read();
    return isPromise(r) ? r.then(plant) : plant(r);
  };

  db.write = (returnValue: object) => {
    const w = adapter.write(db.getState());
    return isPromise(w) ? w.then(() => returnValue) : returnValue;
  };

  db.getState = (): object => db.__wrapped__;

  db.setState = (state: object): ObjectChain<object> => plant(state);

  return db.read();
};
