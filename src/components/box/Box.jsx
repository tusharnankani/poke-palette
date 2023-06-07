import React, { useEffect, useState } from "react";
import "./box.css";
import arrow from "./../../assets/right-arrow.svg";

/**
 * Types of Box
 * 1. Filter
 *      Three states
 *      - Inactive
 *      - Focus (Hover)
 *      - Active (Click)
 *
 *      View
 *      - .radio <hide>
 *      - .text
 *      - .cnt <?conditional>
 *      - .right-arrow
 * 2. Option
 *      Three states
 *      - Inactive
 *      - Focus (Hover)
 *      - Active (Click)
 *
 *      View
 *      - .radio [radio/check]
 *      - .text
 *      - .cnt <hide>
 *      - .right-arrow <hide>
 */

function Box({ 
	depthLevel, 
	obj = {},
	globalState, 
	setGlobalState,
	updateSelected,
	findSelectedValue,
	findSelectedObj,
}) {
	depthLevel += 1;
	const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

	const handleClick = (e) => {
		console.log(e.currentTarget);
		// console.log(e.currentTarget.getAttribute("value"));
		// setIsActive(prevState => !prevState);

		setBoxState(prevState => ({...prevState, isActive: !(prevState.isActive),}), console.log(boxState));
		let finalValue = e.currentTarget.getAttribute("value");
		
		console.log("sending final value: ", finalValue);
		updateSelected(globalState, finalValue);
		setGlobalState(globalState, console.log(globalState));

		let newObj = findSelectedObj(globalState, finalValue);
		reInitialize(newObj);
	};

	// let [isActive, setIsActive] = useState(findSelectedValue(obj.value));
	// let [isActive, setIsActive] = useState(false);

	let [boxState, setBoxState] = useState({
		text: obj.title,
		value: obj.value,
		subMenu: obj.subMenu || [],
		cnt: obj.cnt,
		isFilter: obj.subMenu?.length > 0,
		isOption: obj.subMenu?.length === 0,
		isActive: obj.selected || false,
		selectType: obj.selectType || "",
	});
	
	const reInitialize = (newObj) => {
		setBoxState({
			text: newObj.title,
			value: newObj.value,
			subMenu: newObj.subMenu || [],
			cnt: newObj.cnt,
			isFilter: newObj.subMenu?.length > 0,
			isOption: newObj.subMenu?.length === 0,
			isActive: newObj.selected || false,
			selectType: newObj.selectType || "",
		}, console.log("reinit: ", boxState));
	}
		
	return (
		<React.Fragment>
			<div
				className={`box ${boxState.isFilter ? "filter" : "option"} box-${
					boxState.isActive ? "active" : ""
				}`}
				onClick={handleClick}
				value={boxState.value}
			>
				<div className="first">
					{/* Checkbox || Radio */}
					{boxState.isOption && (
						<span
							className={`select ${boxState.selectType} ${
								boxState.isActive ? "selected" : ""
							}`}
						></span>
					)}

					{/* Text */}
					<span className="text">{boxState.text}</span>
				</div>

				<div className="second">
					{/* Filter Count */}
					{boxState.cnt > 0 && <span className="cnt">{boxState.cnt}</span>}

					{/* Right Arrow */}
					{boxState.isFilter && <img src={arrow} alt="right-arrow" />}
				</div>
			</div>

			{boxState.subMenu.length > 0 && boxState.isActive && (
				<div className={`submenu ${dropdownClass}`}>
					{boxState.subMenu.map((obj, index) => (
						<Box
							key={index}
							depthLevel={depthLevel}
							obj={obj}
							globalState={globalState}
							setGlobalState={setGlobalState}
							updateSelected={updateSelected}
							findSelectedValue={findSelectedValue}
							findSelectedObj={findSelectedObj}
						/>
					))}
				</div>
			)}
		</React.Fragment>
	);
}

export default Box;
