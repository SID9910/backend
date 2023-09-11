const mongoose = require('mongoose');
const express = require("express");
const app = express();
const { db_link} = require('./secret');
// console.log(db_link);
app.use(express.json());
mongoose.connect(db_link)
.then(function(db){
    console.log("db connected");
    // console.log(db);
}).catch(function(err){
    console.log(err);
})

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    confirmPassword:{
        type: String ,
        required: true,
        minLength: 8,
    },
})

const userModel =mongoose.model("userModel", userSchema);

(async function createUser() {
    let user ={
        name:"siddharth",
        email: "siddharthgupta052@gmail.com",
        password:"1234456677",
        confirmPassword: "1234456677"
    };
    let data =await userModel.create(user);
    console.log(data);
})();