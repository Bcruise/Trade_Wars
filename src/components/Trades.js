import '../css/PlayerHome.css';
import { useState, useEffect } from 'react';

function Trades({player, shownData}) {
  
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
  
  return (
        <>
          {displayedCoins.map(item => 
          <>
            <div className="option p-3 col-12">
              <span>{item.name}</span>
              <span>Avg price - ${item.average.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
              })}</span>
              <span>P/L - ${item.profit.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
              })}</span>
            </div>
            <>
              {player.trades.map(trade => trade.name === item.name && 
                <div className="option trade col-12">
                  <span>{trade.name}</span>
                  <span>Price - ${trade.price.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}</span>
                </div>
              )}
        </>
          </>
          )}
        </>
  );
}

export default Trades