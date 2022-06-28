import React, { useState, useEffect } from 'react'
import "./style/price.css"


import { NavLink } from "react-router-dom"

function Price() {

    const [user, setApi] = useState([]);

    const apis = async() => {

        const user_data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")


        setApi(await user_data.json())



    }

    useEffect(() => {

        apis()

    }, [])


    if (!user.length) return <div > lodding.. < /div>

    return ( <
        div >

        { /* start row  class */ }


        {
            /* <div className="row">
            <h1>{user[0].id}</h1>
            <h1>{user[0].name}</h1>
            </div>
             */
        }


        <
        div className = "nav" >

        <
        ul >

        <
        NavLink to = "/" > price < /NavLink>

        <
        NavLink to = "/form" > form < /NavLink>

        <
        NavLink to = "/login" > login < /NavLink>

        <
        /ul>

        <
        /div>



        <
        div className = "top" >

        <
        h1 > top 10 cryptocurrency prices < /h1> <
        /div>


        <
        div className = "b_e_t" >


        <
        div className = "bitcoin_all rob-1" >

        <
        img src = { user[0].image }
        alt = "" / >

        <
        h1 > rank: { user[0].market_cap_rank } < /h1> <
        h1 > name: { user[0].id } < /h1> <
        h1 > price: { user[0].current_price } < /h1> <
        h1 > supply: { user[0].max_supply } < /h1> <
        h1 > circulate.supply: { user[0].circulating_supply } < /h1> <
        h2 > high_24h { user[0].high_24h } < /h2> <
        h3 > low_24h { user[0].low_24h } < /h3> <
        /div>

        {
            /* atl: 67.81
            atl_change_percentage: 30322.67405
            atl_date: "2013-07-06T00:00:00.000Z"
            circulating_supply: 19069518
            current_price: 20390
            fully_diluted_valuation: 430583550567
            high_24h: 22346
            id: "bitcoin"
            image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            last_updated: "2022-06-17T03:56:04.223Z"
            high_24h: 20283 */
        } <
        div className = "ether_all" >
        <
        img src = { user[1].image }
        alt = "" / >

        <
        h1 > rank: { user[1].market_cap_rank } < /h1> <
        h1 > name: { user[1].id } < /h1> <
        h1 > price: { user[1].current_price } < /h1>

        <
        h1 > circulate.supply: { user[1].circulating_supply } < /h1> <
        h2 > high_24h { user[1].high_24h } < /h2> <
        h3 > low_24h { user[1].low_24h } < /h3>

        <
        /div>


        <
        div className = "terth_all" >

        <
        img src = { user[2].image }
        alt = "" / >

        <
        h1 > rank: { user[2].market_cap_rank } < /h1> <
        h1 > name: { user[2].id } < /h1> <
        h1 > price: { user[2].current_price } < /h1>

        <
        h1 > circulate.supply: { user[2].circulating_supply } < /h1> <
        h2 > high_24h { user[2].high_24h } < /h2> <
        h3 > low_24h { user[2].low_24h } < /h3> <
        /div>


        <
        /div>


        { /* second row class line */ }


        <
        div className = "second-row" >

        <
        div className = "usdc_all" >
        <
        img src = { user[3].image }
        alt = "" / >

        <
        h1 > rank: { user[3].market_cap_rank } < /h1> <
        h1 > name: { user[3].id } < /h1> <
        h1 > price: { user[3].current_price } < /h1>

        <
        h1 > circulate.supply: { user[3].circulating_supply } < /h1> <
        h2 > high_24h { user[3].high_24h } < /h2> <
        h3 > low_24h { user[3].low_24h } < /h3>

        <
        /div>


        <
        div className = "bnb_all" >

        <
        img src = { user[4].image }
        alt = "" / >

        <
        h1 > rank: { user[4].market_cap_rank } < /h1> <
        h1 > name: { user[4].id } < /h1> <
        h1 > price: { user[4].current_price } < /h1>

        <
        h1 > circulate.supply: { user[4].circulating_supply } < /h1> <
        h2 > high_24h { user[4].high_24h } < /h2> <
        h3 > low_24h { user[4].low_24h } < /h3> <
        /div>


        <
        div className = "busd_all" >
        <
        img src = { user[5].image }
        alt = "" / >

        <
        h1 > rank: { user[5].market_cap_rank } < /h1> <
        h1 > name: { user[5].id } < /h1> <
        h1 > price: { user[5].current_price } < /h1>

        <
        h1 > circulate.supply: { user[5].circulating_supply } < /h1> <
        h2 > high_24h { user[5].high_24h } < /h2> <
        h3 > low_24h { user[5].low_24h } < /h3>




        <
        /div> <
        /div>



        { /* third row class start line */ }



        <
        div className = "third-row" >

        <
        div className = "ada_all" >
        <
        img src = { user[6].image }
        alt = "" / >

        <
        h1 > rank: { user[6].market_cap_rank } < /h1> <
        h1 > name: { user[6].id } < /h1> <
        h1 > price: { user[6].current_price } < /h1>

        <
        h1 > circulate.supply: { user[6].circulating_supply } < /h1> <
        h2 > high_24h { user[6].high_24h } < /h2> <
        h3 > low_24h { user[6].low_24h } < /h3>


        <
        /div>


        <
        div className = "ripple_all" >

        <
        img src = { user[7].image }
        alt = "" / >

        <
        h1 > rank: { user[7].market_cap_rank } < /h1> <
        h1 > name: { user[7].id } < /h1> <
        h1 > price: { user[7].current_price } < /h1>

        <
        h1 > circulate.supply: { user[7].circulating_supply } < /h1> <
        h2 > high_24h { user[7].high_24h } < /h2> <
        h3 > low_24h { user[7].low_24h } < /h3>

        <
        /div>


        <
        div className = "sol_all" >

        { /* fourth row class start line */ }

        <
        img src = { user[8].image }
        alt = "" / >

        <
        h1 > rank: { user[8].market_cap_rank } < /h1> <
        h1 > name: { user[8].id } < /h1> <
        h1 > price: { user[8].current_price } < /h1>

        <
        h1 > circulate.supply: { user[8].circulating_supply } < /h1> <
        h2 > high_24h { user[8].high_24h } < /h2> <
        h3 > low_24h { user[8].low_24h } < /h3>

        <
        /div> <
        /div>

        <
        div className = "four" >

        <
        div className = "dot_all" >
        <
        img src = { user[9].image }
        alt = "" / >

        <
        h1 > rank: { user[9].market_cap_rank } < /h1> <
        h1 > name: { user[9].id } < /h1> <
        h1 > price: { user[9].current_price } < /h1>

        <
        h1 > circulate.supply: { user[9].circulating_supply } < /h1> <
        h2 > high_24h { user[9].high_24h } < /h2> <
        h3 > low_24h { user[9].low_24h } < /h3>

        <
        /div>

        <
        /div>









        { /* <last row class></last> */ } <
        /div>
    )
}

export default Price