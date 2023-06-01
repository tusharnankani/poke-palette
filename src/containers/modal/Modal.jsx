import React, {useState} from 'react';
import './modal.css'
import {Box, CTA} from '../../components';
import {struct} from './../../struct';
import { useQuery } from "@apollo/client";
import { POKEMON_QUERY, MOVES_QUERY } from "./../../graphql/get-pokemon";
import Result from '../result/Result';


function Modal() {
    // Define structure of the menu
    let menuItems = struct;
    let baseQuery = {
        pokemon: {
            generation: "",
            color: "",
            habitat: [],
        },
        moves: {
            move_class: "",
            power_points: "",
        }
    }

	let [globalState, setGlobalState] = useState(menuItems);
	let [query, setQuery] = useState(baseQuery);

    const depthLevel = 0;
    return (
        <div className='modal'>
            <div className="panel">
                {
                    menuItems.map((obj, index) => (
                        <Box key={index}
                            depthLevel={depthLevel}
                            obj={obj}
                            globalState={globalState}
                            setGlobalState={setGlobalState}
                        />
                    ))
                }
            </div>
            <div className="cta">
                <CTA text="Reset" 
                    key="reset" 
                    type="secondary" 
                />
                <CTA text="Submit" 
                    key="submit" 
                    type="primary"
                    href="/submit"
                />
            </div>
        </div>
     );
}

export default Modal;