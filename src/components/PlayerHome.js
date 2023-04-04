import '../css/PlayerHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PlayerHome({setWhichComponent}) {

  // do show leaderboard link but not return link
  setWhichComponent('Player Home');

  //get data
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(function (response) {
      if (coinData.length == 0) {
        setCoinData(prevCoinData => {
          const newData = [];
          for (let a = 0; a < 10; a++) {
            if (coinData === a) {
              newData.push({ 
                Name: response.data[a].name,
                Current_Price: response.data[a].current_price,
                Rank: response.data[a].market_cap_rank
              });
            }
          }
          return [...prevCoinData, ...newData];
        });
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  },[]);

  const [dataToDisplay, setDataToDisplay] = useState([]);

  const FilterCoins = (e) => {
    
  }

  return (
    <div className="playerHome">
        <div className="input-div">
            <input onClick={(e) => {
              FilterCoins();
            }}>
            
            </input>
        </div>
        <div className="asset-classes">
            <div className="asset col-12 p-1">Cryptocurrencies</div>
        </div>
        <div classNames="trade-options-div">
          {coinData.map(coin => 
          <div className="option p-3 col-12">
            <div className="col-3">{coin.Name}</div>
            <div className="col-3">${coin.Current_Price}</div>
            <button className="col-3 buy">BUY</button>
            <button className="col-3 sell">SELL</button>
          </div>)}
        </div>
    </div>
  );
}

export default PlayerHome;