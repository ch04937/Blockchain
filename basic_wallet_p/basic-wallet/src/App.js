import React from "react";
import Profile from "./components/Profile";
import Wallet from "./components/Wallet";

// importing css
import "./App.css";
import "./app.scss";

/*
 * Allow the user to enter, save, or change the `id` used for the program
 * Display the current balance for that user
 * Display a list of all transactions for this user, including sender and recipient
 */

function App() {
	return (
		<div className="App">
			<h1> Basic Wallet</h1>
			<div className="body">
				<Profile />
				<Wallet />
			</div>
		</div>
	);
}

export default App;
