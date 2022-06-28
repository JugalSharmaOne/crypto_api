import React, { useState } from 'react'


import { NavLink, useHistory } from "react-router-dom";
import ("./style/login.css")

function Login() {


    const history = useHistory();



    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const Formchange = async(e) => {


        e.preventDefault();




        const res = await fetch("/Login", {


            method: "POST",

            headers: {

                "Content-Type": "application/json"
            },

            body: JSON.stringify({




                email,
                password




            })
        })



        const ress = await res.json();

        if (ress.status === 422 || !ress) {


            window.alert("invalid resigart")

            console.log("invalid")
        } else {

            window.alert("complete");

            console.log("complete")

            history.push("/")
        }


    }

    return (



        <
        div >


        <
        div className = "form" >


        <
        h1 > sign - in < /h1> <
        p > sign in one of following options: < /p>

        <
        form method = "POST" >




        <
        input type = "email"
        id = ""
        name = "email"

        required = { true }
        value = { email }

        onChange = {
            (e) => setEmail(e.target.value)
        }
        placeholder = "enter email" / >







        <
        input type = "password"
        id = ""
        name = "password"
        value = { password }

        required = { true }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        placeholder = "enter password" / >




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
        /div>

        <
        /div>
    )
}

export default Login