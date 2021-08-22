import React from "react";
import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/Login">
						<Login />
					</Route>
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
