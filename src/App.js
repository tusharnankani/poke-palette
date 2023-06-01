import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Modal, Result } from "./containers";
import { useQuery } from "@apollo/client";
import { POKEMON_QUERY, MOVES_QUERY } from "./graphql/get-pokemon";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const KEY_CODE = {
	CTRL: "17",
	CTRL_K: "1775",
	ESC: "27"
};

function App() {

	// const { data: { pokemons = [] } = {}, loading, error} = useQuery(POKEMON_QUERY);
	// const { data: { pokemons2 = [] } = {} } = useQuery(MOVES_QUERY);

	// console.log(pokemons)

	let globalString = "";
	const homeRef = useRef(null);
	const [openModal, setOpenModal] = useState(false);

	const resetGlobalString = () => {
		globalString = "";
		focusHomeComponent();
	};

	/**
	 * handleKeyDown function
	 * To detect keydown events and identify `CTRL K` or `Esc`
	 */
	const handleKeyDown = (event) => {
		let keyCode = event.keyCode || event.which;
		globalString += keyCode;

		// detect CTRL + K;
		if (globalString.slice(-4) === KEY_CODE.CTRL_K) {
      
			// to override CTRL + K of the browser;
			event.preventDefault();

			// change state here;
			setOpenModal((prevState) => !prevState);

			// reset string to avoid overflow
			resetGlobalString();

		} else {
			let lastTwoKeys = globalString.slice(-2);

			// if Esc; simply close the modal
			if (lastTwoKeys === KEY_CODE.ESC) {
				event.preventDefault();
				setOpenModal(false);
				resetGlobalString();
			} else if (
				lastTwoKeys !== KEY_CODE.CTRL &&
				lastTwoKeys !== KEY_CODE.ESC
			) {
				resetGlobalString();
			}
		}
	};

	/**
	 * Function to gain focus when component loses focus;
	 * Such that Ctrl K is successfully activated;
	 */
	const focusHomeComponent = () => {
		homeRef.current.focus();
	};

	const handleOutsideClick = (e) => {
		e.preventDefault();
		// change state here;
		setOpenModal(false);
	}

	useEffect(() => {
		// Function to focus when the component renders;
		focusHomeComponent();
	}, []);

	return (
		<div
			className="home"
			ref={homeRef}
			onKeyDown={handleKeyDown}
			onBlur={focusHomeComponent}
			tabIndex="0"
		>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Modal/>} />
					{/* <Route exact path="/" element={openModal ? <Modal /> : "Press CTRL K to get started."} /> */}
					<Route path="/submit" element={<Result/>} />
				</Routes>
			</BrowserRouter>
			
		</div>
	);
}

export default App;
