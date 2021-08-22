import React from "react";
import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/detail">
						<Detail />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
