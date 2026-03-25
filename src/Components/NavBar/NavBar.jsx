import React from 'react';
import Link from './Link';



const navItems = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/blog", name: "Blog" },
  { id: 5, path: "/contact", name: "Contact" }
];


const NavBar = () => {
    return (
        <nav>
           <ul className='flex gap-4'>
            {
                navItems.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul> 
        </nav>
    );
};

export default NavBar;