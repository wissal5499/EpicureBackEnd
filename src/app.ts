import express from "express";
import routes from './routes/index';
import { connectDb } from "./db/index";
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

const mongoose = require("mongoose");
app.use(express.json());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


connectDb().then(async () => {
 app.listen(3001, () => console.log("Listening on http://localhost:3001"));

//  app.get("/", function (req, res) {
//     res.send("Default");
//     });
});


require("./db/models/users");
const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
    const { firstName, lastName,phoneNumber, email, password,confirmPassword } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.json({ error: "User Exists" });
      }
      await User.create({
        firstName,
        lastName,
        phoneNumber,
        email,
        password: encryptedPassword,
      });
      
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });