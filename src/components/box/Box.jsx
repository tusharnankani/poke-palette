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
		console.log(e.currentTarget.getAttribute("value"));
		setIsActive((prevState) => !prevState);
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
