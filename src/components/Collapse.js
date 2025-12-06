import React, { useState } from 'react';
import arrow from '../assets/img/arrow-open.png'

const Collapse = ({ title, children, customClass}) => {

      const [isOpen, setIsOpen] = useState(false); 

    return (
        <>  
            <div className="collapse-bloc">
                <div className={`collapse ${customClass}`} onClick={() => setIsOpen(!isOpen) }>
                    <h2>{title}</h2>
                    <img src={arrow} alt='icône flèche' className={isOpen ? 'rotated' :''} />
                </div>

                <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                    {children}
                </div>
                
            </div>
        </>
    )
};

export default Collapse;