import React, { useEffect, useState } from "react";
import "./modal.css";
import { Box, CTA } from "../../components";
import { struct } from "./../../utils/struct";
import { useNavigate } from "react-router-dom";

function Modal() {
	// Define structure of the menu
	let menuItems = struct;
	let baseQuery = {
		pokemon: {
			generation: "",
			color: "",
			habitat: []
		},
		moves: {
			move_class: "",
			power_points: ""
		}
	};

	let [globalState, setGlobalState] = useState(menuItems);

	let [query, setQuery] = useState(baseQuery);

	let navigate = useNavigate(); 

	let findSelectedObject = (value) => {
		return globalState.filter((obj) => obj.value === value)[0];
	}

	const updateSelected = (struct, value) => {
		
		for (let i = 0; i < struct.length; i++) {
			const item = struct[i];
			if (item.value === value) {
				// if it is already selected, set as false;
				if(item.selected) {
					item.selected = false;
				}
				else {
					item.selected = true; // Set the clicked item as selected
					
					// Set all other items on the same level to false
					for (let j = 0; j < struct.length; j++) {
						if (j !== i) {
							struct[j].selected = false;
						}
					}
				}
			}
			
			if (item.subMenu) {
				updateSelected(item.subMenu, value); // Recursively traverse subMenu
			}
	  	}
	}

	function findSelectedValue(struct, value) {
		for (let i = 0; i < struct.length; i++) {
			const item = struct[i];
			if (item.value === value) {
				return item.selected;
			}
	  
			if (item.subMenu) {
				const selectedValue = findSelectedValue(item.subMenu, value);
				if (selectedValue !== undefined) {
					return selectedValue;
				}
			}
		}
	  
		return undefined; 
	}

	function findSelectedObj(struct, value) {
		for (let i = 0; i < struct.length; i++) {
			const item = struct[i];
			if (item.value === value) {
				return item;
			}
	  
			if (item.subMenu) {
				const selectedValue = findSelectedObj(item.subMenu, value);
				if (selectedValue !== undefined) {
					return selectedValue;
				}
			}
		}
	  
		return undefined; 
	}


	let handleSubmit = () => {
		const queryParams = new URLSearchParams();
		
		if(findSelectedObject('pokemons').selected) {
			const filter = "pokemons";
			
			// access globalState to find these variables;
			const generation = "generation-i";
			const pokemonColor = "red";
			const pokemonHabitatNames = ["forest", "grassland"];
			
			queryParams.set("filter", filter);
			queryParams.set("generation", generation);
			queryParams.set("pokemonColor", pokemonColor);
			pokemonHabitatNames.forEach((habitatName) => {
				queryParams.append("pokemonHabitatNames", habitatName);
			});
		} else if (findSelectedObject('moves').selected) {
			const filter = "moves";
			
			const powerPoints = 10;
			const moveClass = "status";
			
			queryParams.set("filter", filter);
			queryParams.set("powerPoints", powerPoints);
			queryParams.set("moveClass", moveClass);
		}

		const url = `/submit?${queryParams.toString()}`;
		console.log(url)
		
		navigate(url);
	};

	const depthLevel = 0;
	return (
		<div className="modal">
			<div className="panel">
				{globalState.map((obj, index) => (
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
			<div className="cta">
				<CTA text="Reset" key="reset" type="secondary" />
				<CTA
					text="Submit"
					key="submit"
					type="primary"
					onClick={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default Modal;
