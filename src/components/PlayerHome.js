import '../css/PlayerHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cryptocurrencies from './Cryptocurrencies';
import Trades from './Trades';
import { insertDocument } from './MongoDB';

function PlayerHome({setWhichComponent, player, setPlayer}) {

  // do show leaderboard link but not return link
  setWhichComponent('Player Home');

  const [chosenPage, setChosenPage] = useState('Cryptocurrencies');

  let testObj = {
    name: 'Ben',
    age: 2
  }

  insertDocument(testObj);

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
            <div className="asset col-6 p-1" style={chosenPage === 'Cryptocurrencies' ? {backgroundColor: 'rgb(16,60,93)', color: 'white'} : {backgroundColor: 'white'}} 
              onClick={() => setChosenPage('Cryptocurrencies')}>Cryptocurrencies</div>
            <div className="asset col-6 p-1" style={chosenPage === 'Trades' ? {backgroundColor: 'rgb(16,60,93)', color: 'white'} : {backgroundColor: 'white'}}
              onClick={() => setChosenPage('Trades')}>Trades</div>
        </div>
        {chosenPage === 'Cryptocurrencies' ? 
          <Cryptocurrencies shownData={shownData} player={player} setPlayer={setPlayer}/>
          :
          <Trades player={player} shownData={shownData} />
        }
    </div>
  );
}

export default PlayerHome;
