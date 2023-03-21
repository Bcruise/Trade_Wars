import './App.css';
import PlayerHome from './components/PlayerHome';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {HashRouter as  Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
          <Routes>
            <Route path="/PlayerHome" element={<PlayerHome />} />
            <Route path="/" element={<Login />} />
          </Routes>
      </>
    </Router>
  );
}

export default App;
