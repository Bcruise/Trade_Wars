import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({whichComponent}) {

    return (
      <>
        <nav className="col-12">
            <div className="left col-6">
              <span>Trade Wars</span>
            </div>

            {whichComponent === 'Player Home' && 
            <Link to="/Leaderboard" className="right col-6">
              <span>Leaderboard</span>
            </Link>}

            {whichComponent === 'Leaderboard' && 
            <Link to="/PlayerHome" className="right col-6">
              <span>Player Home</span>
            </Link>}

        </nav>
      </>
    );
  }
  
  export default Navbar;