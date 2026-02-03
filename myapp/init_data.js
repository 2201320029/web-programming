const MongoClient = require('mongodb').MongoClient;

// 設定（mongo.jsと同じにする）
const url = 'mongodb://localhost:27017';
const dbName = 'cu2201320029'; // あなたの学籍番号

MongoClient.connect(url, async (err, client) => {
    if (err) {
        console.error("接続失敗:", err);
        return;
    }
    
    console.log("MongoDBに接続しました！");
    const db = client.db(dbName);
    const collection = db.collection('users');

    // ★ここが入れるデータです
    const docs = [
        { name: '田中 太郎', email: 'tanaka@test.com' },
        { name: '鈴木 花子', email: 'suzuki@test.com' },
        { name: '佐藤 次郎', email: 'sato@test.com' }
    ];

    try {
        // データを流し込む
        await collection.insertMany(docs);
        console.log("データの登録に成功しました！");
    } catch (e) {
        console.error("エラー:", e);
    } finally {
        client.close();
    }
});