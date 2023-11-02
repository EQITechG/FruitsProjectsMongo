//Mongoose is to mongoDB as JQuery is to DOM

const mongoose = require('mongoose'); //Required for Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/fruitDB');  //Simple connected and database creation

// const fruitSchema = new mongoose.Schema({  //Creating the schema/ tables
//   name: String,
//   rating: Number,
//   review: String
// })

const fruitSchema = new mongoose.Schema({  //This is a schema with valudation.
  name: {
    type: String,
    required: [true, "Please check your data entry no name specifed"] // for required string
  },
  rating: {
    type: Number, //Validated maximum numbers for rating for number sanitization
    min: 1,
    max: 10
  },
  review: String
})



const Fruit = mongoose.model("Fruit", fruitSchema ); //Inserting the first data

const fruit = new Fruit ({ //Data Inserted
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
})

// fruit.save(); // Everytime this is run the data is added to the DB. Moongose uses loadash and other tools/plugins to handle uppercase and lower case names, as well as create plural tables likle below where person is created and table name became people


//Creating a table of people in the same database
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// })

// const Person = mongoose.model("Person", personSchema);
// const person = new Person ({
//   name: "John",
//   age: 37
// })

// person.save(); 


//This was done last in the code, Creating relationships between two tables in a database

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
})
const Person = mongoose.model("Person", personSchema);
const guava = new Fruit({
  name: "Guava",
  rating: 9,
  review: "Special Fruit."
});

guava.save();

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: guava
// })
// person.save();






//Creating multiple entries to the existing table of fruits

const banana = new Fruit ({ //Data Inserted
  name: "banana",
  rating: 6,
  review: "Soft fruit good food"
})

const kiwi = new Fruit ({ //Data Inserted
  name: "Kiwi",
  rating: 7,
  review: "Rough skin, but sweet"
})

const orange = new Fruit ({ //Data Inserted
  name: "Orange",
  rating: 7,
  review: "Juicy"
})

const papaya = new Fruit ({ //Data Inserted
  name: "Papaya",
  rating: 9,
  review: "Amazing fruit"
})

const pineApple = new Fruit ({ //Data Inserted
  name: "Pine Apple",
  rating: 8,
  review: "Sweetest if you an avoid the black bits"
})
// Fruit.insertMany([banana, kiwi, orange, papaya, pineApple]).then(function () {
//   console.log("Successfully saved defult items to DB");
// }).catch(function (err) {
//   console.log(err);
// }); //The intertMany function no longer accepted callback functions, hence the then....

// async function myfruits() {
//   const fruits= await Fruit.find({});
//   console.log(fruits);
// }
// myfruits();  // Gets you every entry in the fruits table

//-----------------DISPLAY DATA-----------------
async function displayFruits() {
  const fruits= await Fruit.find({});
  mongoose.connection.close(); //Always a good idea to close connection, If entered below it throws an error.

 fruits.forEach((fruit)=>{//loops through each fruit name and logs it on the console
  console.log(fruit);
 })
  
}
// displayFruits(); // Calling the function


//-----------------UPDATE DATA ROW-----------------
//This changes a while entry for what is provided.
async function updateFruits(){
  const fruits = await Fruit.updateOne({ _id:"64cd3a2de2d129bdd7e30db2"}, { name:"Cocoa"});
  mongoose.connection.close();
  console.log(fruits);
   
}
// updateFruits();



//-----------------UPDATE SPECIFIC DATA-----------------
async function replaeFruits(){
  const fruits = await Fruit.replaceOne({ _id:"64cd3a2de2d129bdd7e30db2"}, { name:"Cocoa"});
  mongoose.connection.close();
  console.log(fruits);
   
}
// replaceFruits();


//-----------------DELETE SPECIFIC-----------------
async function deleteFruits(){
  const fruits = await Fruit.deleteOne({ _id:"64cd3a2de2d129bdd7e30db1" });// Call back function for errors has been disabled, instead you can use .then(function())
  mongoose.connection.close();
  console.log(fruits);
   
}
// deleteFruits();

//-----------------DELETE MANY-----------------
async function deleteManyPeople(){
  await Person.deleteMany({ name: "John" });
  mongoose.connection.close();
  console.log("Delete Successful");
}
// deleteManyPeople();


// async function deletePeople(){
//   const person = await Person.deleteOne({ name:"John" });
//   mongoose.connection.close();
//   console.log(person);
   
// }
// deletePeople();

//Update for person after relationship with other tables
async function updatePerson(){
  const person = await Person.updateOne({ name:"John"}, { favouriteFruit: guava});
  mongoose.connection.close();
  console.log(person);
   
}

// updatePerson();