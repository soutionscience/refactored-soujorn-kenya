var bcrypt = require('bcrypt')
var users = require('./data/users')
const config = require('./config');
var Mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;


function seedCollection(collectionName, initialRecords){
    console.log("hitting")
    MongoClient.connect(config.mongoDbUrl, function(err, db){
        if(err) throw err;
        console.log("connected to remote db")
        const collection = db.collection(collectionName);
       collection.remove();
       
       initialRecords.forEach(function(item){
           if(item.password){
               item.password = bcrypt.hashSync(item.password, 10);
           }
       });

       collection.insertMany(initialRecords, function(err, result){
           if(err) throw err;
           console.log("inserting records");
           console.log(`${result.insertedCount} records inserted.`);
           console.log('closing connection...');
           db.close();
           console.log('done.');

       })

    })

}

seedCollection('users', users);

