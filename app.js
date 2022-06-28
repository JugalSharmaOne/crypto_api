// const api = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")


const express = require('express');

require('./db/conn')

const app = express();
var bcrypt = require('bcryptjs');

const Register = require("./models/student")


app.use(express.json());


const port = process.env.PORT || 5000;








//form register user


app.post('/Sign', async(req, res) => {


    try {



        const data = new Register({


            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        })


        const userdata = await data.save();

        res.status(201).json({ error: "successfuly" })

        console.log(userdata);

    } catch (e) {
        res.status(401).json({ error: "unsuccessfuly" })
        console.log(e);




    }




})


//login form with


app.post("/Login", async(req, res) => {


    try {


        const email = req.body.email

        const password = req.body.password

        const useremail = await Register.findOne({ email: email });


        const Email = await bcrypt.compare(password, useremail.password)


        if (Email) {

            res.status(201).json({ error: "susdsfull" })

        } else {

            console.log("valide form proble")
        }


    } catch (e) {


        res.status(401).json({ error: " not successfuly" })

        console.log(e)
    }

})


if (process.env.NODE_ENV == "production") {
    app.use(express.static("bit/build"));
    const path = require("path");
    app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, 'bit', 'build', 'index.html')); })
}

app.listen(port, () => {



    console.log("this is port number start " + port);


})