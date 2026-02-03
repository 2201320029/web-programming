var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'cu2201320029'; 

router.get('/', (req, res) => {
    MongoClient.connect(url, async (err, client) => {
        if (err) {
            console.error(err);
            res.json({ status: 'error', error: err.message });
            return;
        }
        
        const db = client.db(dbName);
        const collection = db.collection('users');

        collection.find({}).toArray((err, docs) => {
            client.close();
            if (err) {
                res.json({ status: 'error', error: err.message });
            } else {
                res.json(docs);
            }
        });
    });
});

module.exports = router;