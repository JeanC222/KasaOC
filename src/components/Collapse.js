import React from 'react';
import arrow from '../assets/img/arrow-open.png'

const Dropdown = ({ children }) => {
    return (
        <>  
            <div className='collapse-closed'>
                <p>{children}</p>
                <img src={arrow} alt='icône flèche' />
            </div>
        </>
    );
};

export default Dropdown;