const MongoClient = require('mongodb').MongoClient;

// avaliador local
// const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

// avaliador remoto
const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';

const DB_NAME = 'StoreManager';

const connection = async () => {
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;