import './App.css';
import PlayerHome from './components/PlayerHome';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Leaderboard from './components/Leaderboard';
import {HashRouter as  Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [whichComponent, setWhichComponent] = useState('');
  
  return (
    <Router>
      <>
        <Navbar whichComponent={whichComponent} />
          <Routes>
            <Route path="/" element={<Login setWhichComponent={setWhichComponent}/>} />
            <Route path="/PlayerHome" element={<PlayerHome setWhichComponent={setWhichComponent}/>} />
            <Route path="/Leaderboard" element={<Leaderboard setWhichComponent={setWhichComponent}/>} />
          </Routes>
      </>
    </Router>
  );
}

export default App;
