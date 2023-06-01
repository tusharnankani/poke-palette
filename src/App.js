import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Modal } from "./containers";
import { useQuery } from "@apollo/client";
import { POKEMON_QUERY, MOVES_QUERY } from "./graphql/get-pokemon";

const KEY_CODE = {
	CTRL: "17",
	CTRL_K: "1775",
	ESC: "27"
};

function App() {

	// const { data: { pokemons1 = [] } = {}, loading, error} = useQuery(POKEMON_QUERY);
	// const { data: { pokemons2 = [] } = {} } = useQuery(MOVES_QUERY);

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
			Press CTRL K to get started.
			{/* {openModal ? <Modal /> : ""} */}
			<Modal />
			
		</div>
	);
}

export default App;
