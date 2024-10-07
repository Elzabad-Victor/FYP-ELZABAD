const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://elzabadvictor:hEao2TRJ5JPkjuWx@fyp-cluster.ias5m.mongodb.net/?retryWrites=true&w=majority&appName=fyp-cluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    return client;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err;
  }
}

module.exports = connectToDatabase;
