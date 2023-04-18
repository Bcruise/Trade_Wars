const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://BCruise:lylotquhNGrFVMvN@Cluster0.mongodb.net/PlayerData?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const getCollection = async function() {
  await client.connect();
  const db = client.db('PlayerData');
  const collection = db.collection('Players');
  return { client, collection };
}

export async function insertDocument(document) {
  const { client, collection } = await getCollection();
  
  const result = await collection.insertOne(document);
  console.log('Successfully inserted document:');
  console.log(result.ops[0]);
  
  client.close();
}
