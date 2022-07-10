import React, { useState } from 'react';

import './index.css';

const routes = ['About', 'Resume', 'Projects']

const Navbar = () => {
    const [active, setActive] = useState(routes[0]);

    return (
        <div className='navbar'>
            
            <div className='navbar__active fw-bold fs-5'>
                {active}
            </div>

            <div className='navbar__items mx-auto mx-sm-0 mt-2 mt-sm-0 fs-6'>
                {
                    routes.map((route, index) => (
                        <div key={index} className={`navbar__item mx-2 ${route === active ? 'my-text-primary' : ''}`} onClick={() => setActive(route)}>
                            {route}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Navbar;
