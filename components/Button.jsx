import React from 'react';
import Image from 'next/image';
import Discord from "../public/logo/Discord.png";

const Button = ({children ,className,onclick,img}) => {
    return (
        <button className='nav_button'>
            <Image src={Discord}  width={24} height={24}/>
            <span className='discord'>discord</span>
        </button>
    );
};

export default Button;