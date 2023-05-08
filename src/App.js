import './App.css';
import PlayerHome from './components/PlayerHome';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Leaderboard from './components/Leaderboard';
import {HashRouter as  Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [whichComponent, setWhichComponent] = useState('');

  const [player, setPlayer] = useState({
    "username": "",
    "password": "",
    "permSignedIn": false,
    "balance": 100000,
    "trades": [],
    "tradeQTY": 0
  });
  
  useEffect(() => {
    // When the component mounts, check for a previously signed-in user
    if (localStorage.getItem('player') !== null) {
      setPlayer(JSON.parse(localStorage.getItem('player')));
    } 
  },[]);

  useEffect(() => {
    // When the player object changes, store the updated player in local storage
    if (player.username !== '') {
      localStorage.setItem('player', JSON.stringify(player));
    }    
    console.log(player)
  }, [player]);
  
  return (
    <Router>
      <>
        <Navbar whichComponent={whichComponent} player={player}/>
          <Routes>
            {player.permSignedIn === false && 
              <Route path="/" element={<Login setWhichComponent={setWhichComponent} player={player} setPlayer={setPlayer}/>} /> 
            }
            {player.permSignedIn === true && 
              <Route path="/" element={<PlayerHome setWhichComponent={setWhichComponent} player={player} setPlayer={setPlayer}/>} />
            }
            <Route path="/Login" element={<Login setWhichComponent={setWhichComponent} player={player} setPlayer={setPlayer}/>} />
            <Route path="/PlayerHome" element={<PlayerHome setWhichComponent={setWhichComponent} player={player} setPlayer={setPlayer}/>} />
            <Route path="/Leaderboard" element={<Leaderboard setWhichComponent={setWhichComponent}/>} />
          </Routes>
      </>
    </Router>
  );
}

export default App;
