import * as _ from 'lodash';
import FileSyncAdapter from './adapters/FileSync';
import jsonDB from './db';

const fileSyncAdapter = new FileSyncAdapter('src/data.json');
const db = jsonDB(fileSyncAdapter);
const posts = db.get('posts').push({ id: 3, title: 'lowdb is awesome 3' }).write();
console.log({ posts });

// Set a user using Lodash shorthand syntax
db.set('user.name', 'jimstoik13').write();
console.log(db.get());
