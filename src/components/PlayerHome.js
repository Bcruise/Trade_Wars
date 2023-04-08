import '../css/PlayerHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BuySection from './BuySection';

function PlayerHome({setWhichComponent, player, setPlayer}) {

  // do show leaderboard link but not return link
  setWhichComponent('Player Home');

  //get data
  const [coinData, setCoinData] = useState([]);
  const [shownData, setShownData] = useState([]);  
  
  useEffect(() => {
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )
    .then(function (response) {
      const data = response.data;
      setCoinData(data);
      setShownData(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);

  return (
    <div className="playerHome">
        <div className="input-div">
            <input onInput={(e) => {
              const filteredData = coinData.filter(coin => coin.name.toLowerCase().includes(e.target.value.toLowerCase()));
              setShownData(filteredData);
            }} placeholder="Search coins here..." className="p-1">
            
            </input>
        </div>
        <div className="asset-classes">
            <div className="asset col-12 p-1">Cryptocurrencies</div>
        </div>
        <div classNames="trade-options-div">
           
          {shownData.map(coin => (<div className="option p-3 col-12">
            <div className="col-3">{coin.name}</div>
            <div className="col-3">${coin.current_price.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
              })}</div>
            <BuySection player={player} setPlayer={setPlayer} coin={coin}/>
          </div>))}
        </div>
    </div>
  );
}

export default PlayerHome;
