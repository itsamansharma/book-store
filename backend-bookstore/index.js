const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// connection to DB
mongoose
  .connect(
    "mongodb+srv://bookuser:zE630rIjXGt16dS0@cluster0.5cxzs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("mongoose connected...."))
  .catch((err) => console.log(err));

// user schema
const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
});
const User = new mongoose.model("User", userSchema);

//  adding books
app.post("/addbook", (req, res) => {
  const { name, author } = req.body;
  User.collection.findOne({ name: name }, (err, user) => {
    if (user) {
      res.send({ message: "user already prssent" });
    } else {
      const user = new User({
        name,
        author,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "book added" });
        }
      });
    }
  });
});

// listing books
app.get("/get-books", async (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.listen(5000, console.log("connected to port 5000"));
