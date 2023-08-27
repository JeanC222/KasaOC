import React, { useState } from 'react';
import arrow from '../assets/img/arrow-open.png'

const Collapse = ({ isHidden, setIsHidden }) => {
    // const [isHidden, setIsHidden] = useState(true);
    
    // const toggleVisibility = () => {
    //     setIsOpen(!isOpen);
    // }

    return (
        <>  
            <div className='collapse'>
            {/* {isOpen ? null : props.children} */}
            <img src={arrow} alt='icône flèche' />
            {/* onClick={toggleVisibility} */}
            </div>
        </>
    );
};

export default Collapse;