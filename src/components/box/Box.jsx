import React from "react";
import "./box.css";
import arrow from "./../../assets/right-arrow.svg";

/**
 * Types of Box
 * 1. Filter
 *      Three states
 *      - Inactive
 *      - Focus (Hover)
 *      - Active (Click)
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
 *      View
 *      - .radio [radio/check]
 *      - .text
 *      - .cnt <hide>
 *      - .right-arrow <hide>
 *      - Radio
 *      - Checkbox
 */

function Box({
	selectBool = false,
	selectType = "",
	text = "Default Box",
	cnt = 0,
	arrowBool = true
}) {
	return (
		<button className="box">
			<div className="first">
				{/* Checkbox/Radio */}
                {console.log(selectBool)}
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
		</button>
	);
}

export default Box;
