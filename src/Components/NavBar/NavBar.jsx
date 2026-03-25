import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';



const navItems = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/blog", name: "Blog" },
  { id: 5, path: "/contact", name: "Contact" }
];


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navItems.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between items-center p-5'>

            <span className='flex gap-2.5' onClick={() => setOpen(!open)}>
                {open ? 
                <X className='md:hidden'></X> : 
                <Menu className='md:hidden'></Menu>}

                <ul className={`md:hidden absolute duration-1000
                     ${open ? 'top-12' : '-top-60'}
                     bg-gray-300 text-black`}>
                    {links}
                </ul>
            
            <h3 className='font-bold text-[20px] text-blue-500'>My NavBar</h3>
            </span>
           <ul className='md:flex gap-4 hidden'>
            {
                links
            }
            </ul> 
            <button>Sing In</button>
        </nav>
    );
};

export default NavBar;