import { readFileSync, writeFileSync, existsSync } from 'fs';
import * as _ from 'lodash';

import FileSyncAdapter from './adapters/FileSync';
import DB from './DB';

const fileSyncAdapter = new FileSyncAdapter('src/data.json');
const db = new DB(fileSyncAdapter);
const jsonData = db.read();

// console.log({ jsonData });
// console.log(_.get(jsonData, 'user'));

const sumOfEvenSquares = _.chain(jsonData)
  .filter((n, i) => console.log({ n, i }))
  .value();


const test = _.chain({ 'test': 1 });
console.log(test);

// Essentially, we want to set the state into __wrapped__
// and return DB, that is basically, a lodash chain
