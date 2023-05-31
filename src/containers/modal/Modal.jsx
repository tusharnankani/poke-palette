import React from 'react';
import './modal.css'
import {Box} from '../../components';
import {struct} from './../../struct';

function Modal() {
    // Define structure of the menu
    const menuItems = struct;

    const depthLevel = 0;
    return ( 
        <div className='modal'>
            <div className="panel">
                {
                    menuItems.map((obj, index) => (
                        <Box key={index} 
                            text={obj.title}
                            cnt={obj.cnt}
                            selectBool={(obj.select?.length > 0)}
                            selectType={obj.selectType || ""}
                            arrowBool={obj.subMenu?.length > 0}
                        />
                    ))
                }
            </div>
        </div>
     );
}

export default Modal;