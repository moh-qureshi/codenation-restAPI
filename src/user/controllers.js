const User = require("./model")
const bcrypt = require("bcryptjs")

exports.createUser = async (req, res) =>{
    try {
        const userObj = {
            username: req.body.username, 
            email: req.body.email, password: 
            req.body.password
        };
        const newUser = await User.create(userObj);
        res.send(newUser);
    } catch (error) {
        console.log(error);
        res.send({ error })
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        res.send(users)
    } catch (error) {
        console.log(error);
        res.send({ error })
    }
};

exports.getUser = async (req, res) => {
    try {
        const userObj = {username: req.body.username};
        const user = await User.findOne(userObj);
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.send({ error })
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userObj = {username: req.body.username};
        const user = await User.findOneAndDelete(userObj);
        res.send(user);
        console.log(user + " has been deleted");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};

exports.updateEmail = async (req, res) => {
    try {
        const user = await User.updateOne({ username: req.body.username }, { email: req.body.email });
        console.log(user);
        res.send(user.email);
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username }});
        console.log(user);
        const checkPassword = await bcrypt.compare(req.body.password, user.password);
        console.log(checkPassword);
        if (checkPassword) {
            res.send(`${req.body.username} has signed in`);
        } else {
            res.send("incorrect password");
        }
    } catch (error) {
        console.log(error);
    }
};