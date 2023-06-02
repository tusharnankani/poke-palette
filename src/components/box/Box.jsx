import React, { useState } from "react";
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
}) {
	
	depthLevel += 1;
	const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

	let text = obj.title,
		value = obj.value,
		subMenu = obj.subMenu || [],
		cnt = obj.cnt;
		

	let isFilter = (subMenu.length > 0),
	isOption = (subMenu.length === 0),
	selected = obj.selected || false,
	selectType = obj.selectType || "";

	let [isActive, setIsActive] = useState(false);

	const handleClick = (e) => {
		console.log(e.currentTarget);
		// console.log(e.currentTarget.getAttribute("value"));
		setIsActive((prevState) => !prevState);
		
		let finalValue = (e.currentTarget.getAttribute("value"));

		console.log("sending final value: ", finalValue)
		console.log("sending depth level: ", depthLevel)
		traverse(
			globalState, 
			1,
			finalValue, 
			depthLevel
		);

		setGlobalState(globalState, (console.log(globalState)));
	}

	/**
	 * Function to update global state onClick;
	 * currMenu
	 * currDepth
	 * finalValue
	 * depthLevel
	 */
	const traverse = (
						currMenu, 
						currDepth, 
						finalValue, 
						depthLevel
					) => {
		
						
		// if lower level depth selected is false, don't dig deeper;
		if(currDepth < depthLevel) {
			if(currMenu.selected === false) {
				return;
			}
		}

		console.log(currDepth, depthLevel)
		if(currDepth === depthLevel) {
			console.log("inside equal")
			console.log(currMenu)
			// set selected true for finalValue;
			let temp = currMenu.filter((obj) => (obj.value === finalValue))
			if(temp.length > 0)
				temp[0].selected = true;

			// set false for remaining objects in the same depth;
			currMenu.map((obj) => {
				if(obj.value !== finalValue) {
					obj.selected = false;
				}
			});

			console.log("reached: ", depthLevel)

			// once it has reached the depth level, don't dig deeper;
			return;
		}

		// if there is submenu, traverse another level;
		console.log("going for recursion")
		currMenu.map((obj) => traverse(obj.subMenu, currDepth + 1, finalValue, depthLevel));
	}

	const findObjectforValue = (currMenu, currDepth, finalValue, depthLevel) => {

		// find the object of selected current value and return it;
		if(currDepth === depthLevel) {
			let temp = currMenu.filter((obj) => (obj.value === finalValue))
			
			if(temp.length > 0)
				return temp[0];
		}

		// if there is submenu, traverse another level;
		// currMenu.map((obj) => findObjectforValue(obj.subMenu, currDepth + 1, finalValue, depthLevel));
		
		for (let obj of currMenu) {
			return findObjectforValue(obj.subMenu, currDepth + 1, finalValue, depthLevel)
		}


		return null;
	}

	return (
		<React.Fragment>
			<div className={`box ${isFilter ? "filter" : "option"} box-${isActive ? "active" : ""}`}
				onClick={handleClick}
				value={value}
			>
				<div className="first">

					{/* Checkbox || Radio */}
					{isOption &&
						(<span className={`select ${selectType} ${isActive ? "selected" : ""}`}></span>)}

					{/* Text */}
					<span className="text">{text}</span>
				
				</div>

				<div className="second">

					{/* Filter Count */}
					{cnt > 0 && (<span className="cnt">{cnt}</span>)}

					{/* Right Arrow */}
					{isFilter && (<img src={arrow} alt="right-arrow" />)}
			
				</div>
			</div>
			
			{subMenu.length > 0 && isActive && (
				<div className={`submenu ${dropdownClass}`}>
					{
						subMenu.map((obj, index) => (
							<Box key={index}
								depthLevel={depthLevel}
								obj={obj}
								globalState={globalState}
								setGlobalState={setGlobalState}
							/>
						))
					}
				</div>
			)}
		</React.Fragment>
	);
}

export default Box;
