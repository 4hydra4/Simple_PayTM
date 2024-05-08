const mongoose = require("mongoose");

mongoose.connect("mongodb url");

const userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
});

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    balance: Number
});

const User = new mongoose.model("User", userSchema);
const Account = new mongoose.model("Account", accountSchema);

module.exports = {
    User,
    Account
}