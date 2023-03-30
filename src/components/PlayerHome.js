import '../css/PlayerHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PlayerHome({setWhichComponent}) {

  // do show leaderboard link but not return link
  setWhichComponent('Player Home');

  //get data
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(function (response) {
        setCoinData(prev => ([...prev, { 
          "Name": response.data[0].name,
          "Current-Price": response.data[0].current_price,
          "Rank": response.data[0].market_cap_rank
        }]));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  },[]);

  return (
    <div className="playerHome">
        <div className="input-div">
            <input>
            
            </input>
        </div>
        <div className="asset-classes">
            <div className="asset col-12 p-1">Cryptocurrencies</div>
        </div>
        <div classNames="trade-options-div">
          <div className="option p-3 col-12">
            <div className="col-3">Apple</div>
            <div className="col-3">$250.00</div>
            <button className="col-3">BUY</button>
            <button className="col-3">SELL</button>
          </div>
        </div>
    </div>
  );
}

export default PlayerHome;