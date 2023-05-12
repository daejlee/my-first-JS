import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]); //give default value! if don't it will be undefined
	const [inputUSD, setInputUSD] = useState("");
	const [coinUSD, setCoinUSD] = useState(0);
	const [myCoins, setMyCoins] = useState(0);
	const onCoinChange = (event) => {
		setCoinUSD(JSON.parse(event.target.value).quotes.USD.price);
	};
	const onInputUSDChange = (event) => setInputUSD(event.target.value);
	const onSubmit = (event) =>{
		event.preventDefault();
		setMyCoins(coinUSD / inputUSD);
		setInputUSD("");
	}
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
		<select onChange={onCoinChange}>
			<option value="xx">Select your cripto</option>
			{coins.map((coin) => (
				<option value={JSON.stringify(coin)}>
					{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
				</option>
			))}
		</select>}
		<hr></hr>
		<h1>How much cripto can I get? 🥺</h1>
		<form onSubmit={onSubmit}>
			<input
			onChange={onInputUSDChange}
			value={inputUSD}
			type="text"
			placeholder='input USD'
			/>
		</form>
		<h2>{myCoins} cripto</h2>
	</div>
	);
}
//challenge !!: get an USD input and display how much cripto currency can I buy
export default App;
