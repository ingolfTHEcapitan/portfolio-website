//db.js
const { MongoClient } = require('mongodb');

const URL = 'mongodb://127.0.0.1:27017/portfolio-db';

// Резкльтат подлючения
let DbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient
            .connect(URL)
            .then((client)=> {
            console.log('Connectes to MongoDB');
            DbConnection = client.db();
            return cb();
          })
          .catch((err)=>{
            return cb(err);
          })
    },
    getDb: () => DbConnection,
}

