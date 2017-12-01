var MongoClient = require('mongodb').MongoClient;
var dbAddress = "mongodb://localhost:27017/duelDb";

const Category = {
  Strong: "Strong",
  Swift: "Swift",
  Mistic :"Mistic"
};

var skills = [
  {id: 1, name: "Strong Attack", imagePath: "assets/strong_atk.png", type: false, category: Category.Strong, value: 10},
  {id: 2, name: "Swift Attack", imagePath: "assets/swift_atk.png", type: false, category: Category.Swift, value: 10},
  {id: 3, name: "Mistic Attack", imagePath: "assets/magic_atk.png", type: false, category: Category.Mistic, value: 10},
  {id: 4, name: "Strong Defense", imagePath: "assets/strong_def.png", type: true, category: Category.Strong, value: 10},
  {id: 5, name: "Swift Defense", imagePath: "assets/swift_def.png", type: true, category: Category.Swift, value: 10},
  {id: 6, name: "Mistic Defense", imagePath: "assets/magic_def.png", type: true, category: Category.Mistic, value: 10},
];

MongoClient.connect(dbAddress, function(err, db) {
  console.log("Dropping DB");
  db.dropDatabase(function(err, dropOK) {
    if (err) throw err;
    db.close();
    MongoClient.connect(dbAddress, function(err, db) {
      if (err) throw err;
      console.log("DB recreated");
      db.collection("skills").insertMany(skills, function(err, res) {
        if (err) throw err;
        console.log("Attemted to insert " + skills.length + " SKILLS");
        console.log("Number of SKILLS inserted: " + res.insertedCount);
        db.close();
      });
    });
  });
});
