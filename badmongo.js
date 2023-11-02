// const { MongoClient } = require("mongodb");
// const assert = require("assert");

// // Replace the uri string with your connection string.
// const url = "mongodb://localhost:27017";


// const dbName = 'fruitsDB';

// const client = new MongoClient(url);

// client.connect(function(err){
//     assert.equal(null,err);
//     console.log("Connedted SUccessfully to server");
//     const db = client.db(dbName);

//     client.close();
// })





const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');

    console.log("Successful")
    // const name = database.collection('names');

    // // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await names.findOne(query);

    // console.log(names);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



// async function run() {
//   try {
//     const database = client.db('ftuitsDB');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);