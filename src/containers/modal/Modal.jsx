import React from 'react';
import './modal.css'
import {Box} from '../../components';

function Modal() {
    const menuItems = [
        {
            parent: true,
            title: "Pokemons",
            cnt: 0,
            subMenu: ["Generation", "Color", "Habitat"]
        },
        {
            parent: true,
            title: "Moves",
            cnt: 0,
            subMenu: ["Move Class", "Power Points"]
        },
        {
            title: "Generation",
            cnt: 0,
            select: ["Generation 1", "Generation 2", "Generation 3"],
            selectType: 'radio'
        },
        {
            title: "Color",
            cnt: 0,
            select: ["Red", "Green", "Blue"],
            selectType: 'radio'
        },
        {
            title: "Habitat",
            cnt: 0,
            select: ["Grassland", "Mountain", "Water"],
            selectType: "check"
        }
    ];

    return ( 
        <div className='modal'>
            <div className="panel">
                {
                    menuItems.map((obj) => (
                        <Box key={`${obj.title}-${obj.cnt}`} 
                            text={obj.title}
                            cnt={obj.cnt}
                            // selectBool={obj.select.length > 0}
                            // selectType={obj.selectType || ""}
                            // arrowBool={obj.subMenu.length > 0}
                        />
                    ))
                }
            </div>
        </div>
     );
}

export default Modal;