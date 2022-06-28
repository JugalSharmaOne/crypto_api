import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import ("./style/form.css")

function Form() {
    const history = useHistory();
    const [user, setUser] = useState({

        name: "",
        email: "",
        password: "",

    })

    const Change = (e) => {


        let name = e.target.name;

        let value = e.target.value;

        setUser({...user, [name]: value });


    }

    const Formchange = async(e) => {

        e.preventDefault();



        const { name, email, password } = user;

        const userdata = await fetch("/Sign", {


            method: "POST",

            headers: {

                "content-type": "application/json",
            },

            body: JSON.stringify({

                name,
                email,
                password

            })



        })

        const res = await userdata.json();

        if (res.status === 422 || !res) {


            window.alert("invalid resigart")

            console.log("invalid")

        } else {

            window.alert("complete");

            console.log("complete")
            history.push("/login")
        }
    }
    return ( <
        div >


        <
        div className = "form" >


        <
        h1 > signup < /h1> <
        p > sign up one of following options: < /p>

        <
        form method = "POST" >


        <
        input type = "text"
        required name = "name"
        id = "name"
        value = { user.name }
        onChange = { Change }
        placeholder = "enter your name" / >

        <
        br / >

        <
        br / >

        <
        input type = "email"
        required name = "email"
        id = "email"
        value = { user.email }
        onChange = { Change }
        placeholder = "Enter your email" / >

        <
        br / >
        <
        br / >

        <
        input type = "password"
        required name = "password"
        value = { user.password }
        onChange = { Change }
        id = "password"
        placeholder = "Enter your password" / >


        <
        br / >

        <
        br / >


        <
        input type = "submit"
        name = ""
        onClick = { Formchange }
        value = "Submit" / >

        <
        /form>


        <
        p > already have an account ? < NavLink to = "/login" > login < /NavLink></p >
        <
        /div>

        <
        /div>
    )
}

export default Form