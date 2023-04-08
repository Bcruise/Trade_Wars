import { useState } from 'react';

function BuySection({player, setPlayer, coin}) {
    
// Declare and initialize carrier state using useState
const [carrier, setCarrier] = useState(0);

const BuyNow = (coin, price) => {
    
    // Check if player has enough balance to make the trade
    if ((player.balance - (carrier * price)) >= 0 && carrier > 0) {

        // Create an array of new trades to add to the player's trades
        let newTrades = [];
        for (let a = 0; a < carrier; a++) {
            newTrades.push({
                name: coin,
                price: price
            });
        }
        
        // Update the player object with new trades and new balance
        let playerDataCarrier = {
            ...player,
            trades: [
                ...player.trades,
                ...newTrades
            ],
            balance: player.balance - (carrier * price)
        };
        // Set the new player object using the setPlayer function and reset the carrier state to 0
        setPlayer(playerDataCarrier);
        setCarrier(0);
    } else if ((player.balance - (carrier * price)) < 0){
        // Display an alert if the player does not have enough balance to make the trade
        alert("Your balance doesn't allow for that trade");
        setCarrier(0);
    } else {
        // Display an alert if the carrier input is 0 or less
        alert("Input a quantity higher than 0");
    }
};


const SellNow = (coin, price) => {
    //filter anything that has coin name
    //filter anything that has coin name
    //filter anything that has coin name
    for (let a = 0; a < player.trades.length; a++) {
        
        if (carrier > 0) {
            
        }
    }
}

// Return JSX elements representing the carrier input and buttons for buying and selling coins
return (
    <>
        <input className="col-1" type="number" value={carrier} onInput={(e) => setCarrier(e.target.value)}></input>
        <button className="col-2 buy" onClick={() => {
            BuyNow(coin.name, coin.current_price)
        }}>BUY</button>
        <button className="col-2 sell" onClick={() => {
            SellNow(coin.name, coin.current_price)
        }}>SELL</button>
    </>
);

}

export default BuySection;
