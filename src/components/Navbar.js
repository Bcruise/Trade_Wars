import '../css/Navbar.css';

function Navbar({whichComponent, player}) {

    return (
        <nav className="col-12">
            <div className="left col-8">
              <span>Trade Wars</span>
            </div>

            {whichComponent === 'Player Home' && 
            
            
            <div className="right col-4">
              <span>${player.balance.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
              })}</span>
            </div>}

            {whichComponent === 'Leaderboard' && 
            <div className="right col-4">
              <span>Player Home</span>
            </div>}

        </nav>
    );
  }
  
  export default Navbar;