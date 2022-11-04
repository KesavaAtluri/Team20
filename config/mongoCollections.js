const dbConnection = require('./mongoConnection');

const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection.connectToDb();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

module.exports = {
  doctors : getCollectionFn('doctors'),
  users : getCollectionFn('users'),
  reviews : getCollectionFn('reviews'),
  pharmacy : getCollectionFn('pharmacy')
};