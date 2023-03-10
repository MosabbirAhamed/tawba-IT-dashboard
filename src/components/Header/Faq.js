import React from 'react'
import { MdOutlineContactPage } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Faq = ({ onClick }) => {
    return (
        <div className='bg-slate-200 w-[120px] md:w-[190px] absolute top-[44px] md:top-[63px] right-0 p-2 pl-3 flex flex-col gap-1 md:gap-2'>
            <Link to={"profile"}>
                <div onClick={onClick} className='flex items-center gap-1 md:gap-2 cursor-pointer '>
                    <span><CgProfile className="text-slate-700  md:text-[25px]" /></span>
                    <h2 className="text-blue-500 hover:text-blue-600 font-semibold text-sm md:text-xl">Profile</h2>
                </div>
            </Link>

            <Link to="faq">
                <div onClick={onClick} className='flex items-center gap-2 cursor-pointer'>
                    <span><MdOutlineContactPage className="text-slate-700  md:text-[25px]" /></span>
                    <h2 className="text-blue-500 hover:text-blue-600 font-semibold text-sm md:text-xl">FAQ</h2>
                </div>
            </Link>
            <Link to="/">
                <div onClick={onClick} className='flex items-center gap-2 cursor-pointer'>
                    <span><HiOutlineLogout className="text-slate-700  md:text-[25px]" /></span>
                    <h2 className="text-blue-500 hover:text-blue-600 font-semibold text-sm md:text-xl">Log Out</h2>
                </div>
            </Link>


        </div>
    )
}

export default Faq