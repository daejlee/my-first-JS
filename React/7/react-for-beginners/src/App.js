import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]); //give default value! if don't it will be undefined
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
		.then((response) => response.json())
		.then((json) => {
			setCoins(json);
			setLoading(false);
		});
	}, []);
	return (
	<div>
		<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
		{loading ? <strong>Loading</strong> : 
		<select>
			{coins.map((coin) => (
				<option>
					{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
				</option>
			))}
		</select>}
	</div>
	);
}
//challenge !!: get an USD input and display how much cripto currency can I buy
export default App;
