import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './index.css';

const routes = ['About', 'Resume', 'Projects']

const Navbar = () => {
    const [active, setActive] = useState(routes[0]);
    const location = useLocation();
    const pathname = location.pathname.split('/')[1]

    return (
        <div className='navbar p-3'>
            
            <div className='navbar__active fw-bold fs-5'>
                {pathname}
            </div>

            <div className='navbar__items mx-auto mx-sm-0 mt-2 mt-sm-0 fs-6'>
                {
                    routes.map((route, index) => (
                        <Link 
                            key={index} 
                            to={route}
                            className={`navbar__item mx-2 ${route === pathname ? 'my-text-primary' : ''}`}
                        >
                            {route}
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default Navbar;
