import '../css/PlayerHome.css';

function PlayerHome() {
  return (
    <div className="playerHome">
        <div className="input-div">
            <input>
            
            </input>
        </div>
        <div className="asset-classes">
            <div className="asset col-4 p-1">Indices</div>
            <div className="asset col-4 p-1">Stocks</div>
            <div className="asset col-4 p-1">Currencies</div>
        </div>
        <div classNames="trade-options-div">
            <div className="option p-2">Apple</div>
            <div className="option p-2">USD</div>
            <div className="option p-2">IBM</div>
            <div className="option p-2">GBP</div>
        </div>
    </div>
  );
}

export default PlayerHome;