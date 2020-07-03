import { readFileSync, writeFileSync, existsSync } from 'fs';

import FileSyncAdapter from './adapters/FileSync';
import DB from './DB';

const fileSyncAdapter = new FileSyncAdapter('src/data-test.json');
const db = new DB(fileSyncAdapter);
db.write({});
const d = db.read();
console.log({ d });