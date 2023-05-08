import '../css/PlayerHome.css';
import { useState, useEffect } from 'react';

function Trades({player, setPlayer, shownData}) {
  
  const SortCoins = () => {
    const tradedCoins = [...new Set(player.trades.map(item => item.name))];
  
    const tradeAveragePriceArray = tradedCoins.map(name => {

      const filteredTrades = player.trades.filter(item => item.name === name);
      const total = filteredTrades.reduce((acc, item) => acc + item.price, 0);
      const average = total / filteredTrades.length;
      const filteredArray = shownData.filter(coin => coin.name === name);
      const currentPrice = filteredArray.length > 0 ? filteredArray[0].current_price : 0; 
      const profit = total - (filteredTrades.length * currentPrice);
      
      return { name, average, profit };

    });
    
    return tradeAveragePriceArray;
  };
  
  const displayedCoins = SortCoins();

  const sellCoin = (key, coin, sellOrder) => {
    
    let coinPrice = shownData.find(shownCoin => shownCoin.name === coin);
    
    if (sellOrder === 'Sell') {
      const newTrades = player.trades.filter(trades => trades.key !== key);
      setPlayer(prevPlayer => ({ 
        ...prevPlayer,
        trades: [
          ...newTrades
        ],
        balance: prevPlayer.balance + coinPrice.current_price
      }));
    } else if (sellOrder === 'Sell All') {
      const newTrades = player.trades.filter(trades => trades.name !== coin);
      const tradesHeld = player.trades.filter(soldCoin => soldCoin.name === coin).length;
      setPlayer(prevPlayer => ({
        ...prevPlayer,
        trades: [
          ...newTrades
        ],
        balance: prevPlayer.balance + (tradesHeld * coinPrice.current_price)
      }))
    }
  }
  
  
  return (
        <>
          {displayedCoins.map(item => 
          <>
            <div className="option row p-3">
              <div className="col-12">
                <span>{item.name}</span>
                <div className="sell p-1" onClick={() => sellCoin("n/a", item.name, "Sell All")}>SELL ALL</div>
              </div>
              <div className="col-12 px-5">
                <span>Avg price - ${item.average.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                })}</span>
                <span>P/L - ${item.profit.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                })}</span>
              </div>
            </div>
            <>
              {player.trades.map(trade => trade.name === item.name && 
                <div className="option trade col-12">
                  <span>{trade.name}</span>
                  <span>Price - ${trade.price.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}</span>
                  <div className="sell p-1" onClick={() => sellCoin(trade.key, item.name, "Sell")}>SELL</div>
                </div>
              )}
        </>
          </>
          )}
        </>
  );
}

export default Trades