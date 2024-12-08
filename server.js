// server.js
const express = require('express');
const { connectToDb, getDb } = require('./db');
const cors = require('cors');


const PORT = 3000;

// Инициализация сервера
const app = express();
app.use(cors({ origin: 'http://localhost:8080' }));

let db;

connectToDb((err) => {
    if (!err) {
        // Запускаем прослушивание сервера на порту 3000
        app.listen(PORT, (err)=>{
            err ? console.log(err): console.log(`listening port http://127.0.0.1:${PORT}`) 
        });
        db = getDb();
    } else {
        console.log(`DB connection error: ${err}`);
        
    }
})

app.get('/gallery-images', async (req, res) => {
    try {
        const galleryImages = await db.collection('GalleryImages').find().toArray();
        res.status(200).json(galleryImages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch gallery images' });
    }
});

app.get('/games', async (req, res) => {
    try {
        const gamesUrl = await db.collection('Games').find().toArray();
        res.status(200).json(gamesUrl);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch gemes' });
    }
});


app.get('/videos', async (req, res) => {
    try {
        const videos = await db.collection('Videos').find().toArray();
        res.status(200).json(videos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch videos' });
    }
});
