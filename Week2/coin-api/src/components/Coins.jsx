import React from 'react';

const Coins = ()=>{

    let [coinList, setCoinList] = useState([]);


    
    const getCoins = ()=>{
        fetch ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

        .then(response =>{
            return response.json()
        })
        .then( convertedResponse =>{
            console.log("got the response-->", convertedResponse)
            setCoinList(convertedResponse)
            }
        )
        .catch(err=>{
            console.log("Yo, my man. Sum' aint right",err)
        })

        console.log("Doing other stuff")
    }

    
    return (
        <div>
            <button onClick={getCoins}>Click me to get coin info</button>
            {
                coinList.map((coin, idx)=>{
                    return (
                        <div key={idx}>
                            <h3>{coin.name}</h3>
                            <p>Price: $ {coin.current_price}</p>
                            <img src="{coin.image}" alt="" width="200px"/>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Coins