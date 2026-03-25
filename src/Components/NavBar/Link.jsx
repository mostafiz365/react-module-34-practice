import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='p-2.5 hover:bg-gray-500 duration-300'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;