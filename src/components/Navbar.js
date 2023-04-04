import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({whichComponent, player}) {

    return (
        <nav className="col-12">
            <div className="left col-8">
              <span>Trade Wars</span>
            </div>

            {whichComponent === 'Player Home' && 
            
            
            <Link to="/Leaderboard" className="right col-4">
              <span>${player.balance.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
              })}</span>
            </Link>}

            {whichComponent === 'Leaderboard' && 
            <Link to="/PlayerHome" className="right col-4">
              <span>Player Home</span>
            </Link>}

        </nav>
    );
  }
  
  export default Navbar;