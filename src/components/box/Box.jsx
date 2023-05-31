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
	selectBool = false,
	selectType = "",
	subMenu = [],
	text = "Default Box",
	cnt = 0,
	arrowBool = true,
}) {

	depthLevel += 1;
	const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
	
	let [dropdown, setDropdown] = useState(false);
	let [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setDropdown((prevState) => !prevState);
		setIsActive((prevState) => !prevState);
	}

	return (
		<React.Fragment>
			<div className={`box box-${isActive ? "active" : ""}`}
				onClick={handleClick}
			>
				<div className="first">
					{/* Checkbox/Radio */}
					{selectBool &&
						(<span className={`select ${selectType}`}></span>)}

					{/* Checkbox/Radio */}
					<span className="text">{text}</span>
				</div>

				<div className="second">
					{/* Filter Count */}
					{cnt > 0 && (<span className="cnt">{cnt}</span>)}

					{/* Right Arrow */}
					{arrowBool && (<img src={arrow} alt="right-arrow" />)}
				</div>
			</div>
			
			{subMenu.length > 0 && (
				<div className={`submenu ${dropdownClass} ${dropdown ? "" : "hide"}`}>
					{
						subMenu.map((obj, index) => (
							<Box key={index} 
								depthLevel={depthLevel}
								text={obj.title}
								cnt={obj.cnt}
								subMenu={obj.subMenu}
								selectBool={(obj.select?.length > 0)}
								selectType={obj.selectType || ""}
								arrowBool={obj.subMenu?.length > 0}
							/>
						))
					}
				</div>
			)}
		</React.Fragment>
	);
}

export default Box;
