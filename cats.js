var mongoose = require("mongoose");

// use cat_app db, it will create the db if it does not exist
mongoose.connect("mongodb://localhost/cat_app");

// Create Schema - use to anticipate data 
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// Use Schema
var Cat = mongoose.model("Cat", catSchema);

// add a new cat to the db

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(err, cat){
//   if(err){
//     console.log("Something went wrong!")
//   } else {
//     console.log("We just saved a cat to the db.");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, function(err, cat){
  if(err){
    console.log(err);
  } else {
    console.log(cat);
  }
});

// retrieve all cats from the db and console.log each one
Cat.find({}, function(err, cats){
  if(err){
    console.log("OH NO, ERROR!");
    console.log(err);
  } else {
    console.log("All the cats.....");
    console.log(cats);
  }
});