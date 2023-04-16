import '../css/PlayerHome.css';
import BuySection from './BuySection';

function Cryptocurrencies({shownData, player, setPlayer}) {

  return (
        <div classNames="trade-options-div">
          {shownData.length == 0 && <div className="option p-3 col-12">
              <span>There are currently no coins available. Please check back later for the latest prices.</span>
            </div>}
          {shownData.map(coin => (<div className="option p-3 col-12">
            <div className="col-3">{coin.name}</div>
            <div className="col-3">${coin.current_price.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
              })}</div>
            <BuySection player={player} setPlayer={setPlayer} coin={coin}/>
          </div>))}
        </div>
  );
}

export default Cryptocurrencies