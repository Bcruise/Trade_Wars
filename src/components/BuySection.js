

function BuySection({player, setPlayer, coin}) {

    let carrier = 0;

    const BuyNow = (carrier, coin, price) => {
        for (let a = 0; a < carrier; a++) {
            let trade = {
                name: coin,
                price: price
            }
        }        
    }

    const SellNow = (carrier, coin, price) => {

    }

    return (
        <>
            <input className="col-1" type="number" placeholder='0' onInput={(e) => carrier = e.target.value}></input>
            <button className="col-2 buy" onClick={() => {
                BuyNow(carrier, coin.name, coin.current_price)
            }}>BUY</button>
            <button className="col-2 sell" onClick={() => {
                SellNow(carrier, coin.name, coin.current_price)
            }}>SELL</button>
        </>
    );
}

export default BuySection;
