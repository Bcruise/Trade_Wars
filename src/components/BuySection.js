import { useState } from 'react';

function BuySection({player, setPlayer, coin}) {
    
    // Declare and initialize carrier state using useState
    const [carrier, setCarrier] = useState(0);

    const BuyNow = (coin, price) => {

        // Check if the player has enough balance to make the trade
        if ((player.balance - (carrier * price)) >= 0 && carrier > 0) {
            
            // Create an array of new trades to add to the player's trades
            let newTrades = [];
            let playerTradeHistoryQTY = player.tradeQTY

            for (let a = 0; a < carrier; a++) {
                playerTradeHistoryQTY ++
                newTrades.push({
                    name: coin,
                    price: price,
                    key: player.tradeQTY + a
                });
            }
            
            // Update the player object with new trades and new balance
            let playerDataCarrier = {
                ...player,
                trades: [
                    ...player.trades,
                    ...newTrades
                ],
                tradeQTY: playerTradeHistoryQTY,
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
    
    // Define a function SellNow that takes in two arguments - coin and price
    const SellNow = (coin, price) => {
        
        if (carrier > 0 && player.trades.filter((t) => t.name === coin).length >= carrier) {
            
            // Filter out the trades that match the coin and are not in the carrier quantity
            const updatedTrades = player.trades.filter((obj) => {
                if (obj.name !== coin) {
                    return true
                } else if (obj.name === coin && player.trades.filter((t) => t.name === coin).indexOf(obj) >= carrier) {
                    return true
                } else {
                    return false
                }
            });
                
            // Update the player object with updated trades and balance
            setPlayer({
                ...player,
                balance: player.balance + (carrier * price),
                trades: updatedTrades
            })
        } else if (carrier == 0) {
            // Display an alert if the carrier input is 0 or less
            alert('Increase the sell quantity to more than one.');
        } else {
            // Display an alert if the player does not have enough of the coin to sell the chosen quantity
            alert('You are not holding enough of that coin to sell the chosen quantity.')
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
