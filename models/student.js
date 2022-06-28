const mongoose = require("mongoose");

var bcrypt = require('bcryptjs');

const student = new mongoose.Schema({



    name: {


        type: String,


    },

    email: {

        type: String,


    },
    password: {

        type: String,


    },



})


student.pre('save', async function(next) {


    if (this.isModified('password')) {

        this.password = await bcrypt.hash(this.password, 12)

    }


    next()

})

const Register = new mongoose.model("Users", student);



module.exports = Register;