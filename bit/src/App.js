import React from 'react'


import { Route } from "react-router-dom"


import Login from './Component/Login'

import Form from './Component/Form'

import Price from './Component/Price'

function App() {
    return ( <
        div >


        <
        Route exact path = "/" >

        <
        Price / >

        <
        /Route>

        {
            /* 
                    // <
                    // Route path = "/new" >

                    // <
                    // New / >

                    </Route> */
        }


        <
        Route path = "/form" >

        <
        Form / >

        <
        /Route>


        <
        Route path = "/login" >

        <
        Login / >

        <
        /Route> {
            /* 
                    // <
                    // Route path = "/Price" >

                    // <
                    // Price / >

                    // <
                    // /Route> */
        }


        <
        /div>
    )
}

export default App