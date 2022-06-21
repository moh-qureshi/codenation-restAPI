const bcrypt = require("bcryptjs");
const e = require("express");
const User = require("../user/model");

exports.hashPassword = async (req, res, next) =>{
    try {
        console.log(req.body.password);
        const pass = req.body.password;
        console.log(pass);
        const hashPass = await bcrypt.hash(pass, 8);
        console.log(hashPass);
        req.body.password = hashPass;
        console.log(req.body.password);

        next();
    } catch (error) {
        console.log(error);
    }
};

exports.unhashPassword = async (req, res, next) =>{
    try {
        req.user = await User.findOne({username: req.body.username});
        console.log(req.user);
        const unhashPass = await bcrypt.compare(req.body.password, user.password);
        if(unhashPass){
            next();
        } else{
            console.log("Incorrect Details");
            next();
        }
    } catch (error) {
        console.log(error);
    }
};