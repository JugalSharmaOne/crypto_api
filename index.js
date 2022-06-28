const apis = async() => {

    const api = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")

    const api_data = await api.json()

    console.log(api_data)

    // setApi(await api.json());

}

apis()



const apiss = async() => {

    const apis = await fetch("https://jsonplaceholder.typicode.com/users")

    const api_datas = await apis.json()

    console.log(api_datas)

    // setApi(await api.json());

}

apiss()