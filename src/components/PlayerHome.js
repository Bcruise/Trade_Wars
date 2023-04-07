import '../css/PlayerHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PlayerHome({setWhichComponent}) {

  // do show leaderboard link but not return link
  setWhichComponent('Player Home');

  //get data
  const [coinData, setCoinData] = useState();
  const [shownData, setShownData] = useState([]);
  
  useEffect(() => {
    let data = [];
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )
    .then(function (response) {
      data = response.data;
      setCoinData(data);
      localStorage.setitem('coinData', JSON.stringify(coinData));
      setShownData(coinData);
    })
    .catch(function (error) {
      {localStorage.getItem(JSON.parse(coinData)) !== null && (setShownData(localStorage.getItem(JSON.parse(coinData))))};
      console.log(error);
    });

  },[]);

  const FilterCoins = (e) => {
    coinData.map(coin => coin.name.includes(e) && 
      setShownData([
        ...shownData,
        coin
      ])
    )  
  }

  const BuyNow = () => {

  }

  const SellNow = () => {

  }

  return (
    <div className="playerHome">
        <div className="input-div">
            <input onInput={(e) => {
              FilterCoins(e.target.value);
            }}>
            
            </input>
        </div>
        <div className="asset-classes">
            <div className="asset col-12 p-1">Cryptocurrencies</div>
        </div>
        <div classNames="trade-options-div">
           
          {shownData.map(coin => (<div className="option p-3 col-12">
            <div className="col-3">{coin.name}</div>
            <div className="col-3">${coin.current_price}</div>
            <input type="number"></input>
            <button className="col-3 buy" onClick={() => {
              BuyNow()
            }}>BUY</button>
            <button className="col-3 sell" onClick={() => {
              SellNow()
            }}>SELL</button>
          </div>))}
        </div>
    </div>
  );
}

export default PlayerHome;