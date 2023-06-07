import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Modal, Result } from "./containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KEY_CODE } from "./utils/keys";

function App() {
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
		if (globalString.slice(-4) === KEY_CODE.CTRL_K || (event.ctrlKey && event.keyCode === 75)) {
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
		setOpenModal(false);
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
			<BrowserRouter>
				<Routes>
					{/* <Route exact path="/" element={<Modal />} /> */}
					<Route exact path="/" element={openModal ? <Modal /> : "Press CTRL K to get started. Esc to end."} />
					<Route path="/submit" element={<Result />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
