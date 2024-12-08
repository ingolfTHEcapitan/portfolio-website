const express = require('express');
const { connectToDb, getDb } = require('./db');

const PORT = 3000;

// Инициализация сервера
const app = express();

let db;

connectToDb((err) => {
    if (!err) {
        // Запускаем прослушивание сервера на порту 3000
        app.listen(PORT, (err)=>{
            err ? console.log(err): console.log(`listening port ${PORT}`) 
        });
        db = getDb();
    } else {
        console.log(`DB connection error: ${err}`);
        
    }
})

