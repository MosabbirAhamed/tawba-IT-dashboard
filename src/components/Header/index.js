import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AiOutlineMenuFold, AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import Faq from './Faq';


const Header = ({ onClick }) => {

    const url = useLocation();

    const [showFaq, setshowFaq] = useState(false)

    const profileOpen = (e) => {
        setshowFaq(!showFaq);
    };
    const profileClose = (e) => {
        setshowFaq(false);

    }

    let title = url.pathname.split('')

    if (title.length > 2) {
        title.shift()
        title[0] = title[0].toLocaleUpperCase()
        title = title.join("")
    } else {
        title = "Dashboard"
    }






    return (
        <header>
            <div className="flex items-center justify-between py-2 pl-2 pr-4 ">

                <div className="flex items-center md:gap-2 gap-1">
                    <a href="/"><img className="md:w-40 w-24" src="/images/logo.png" alt="" /></a>
                    <button
                        onClick={onClick}
                        className='border-x-2 border-gray-200 md:px-2 px-1 '
                    >
                        <AiOutlineMenuFold className="md:text-[30px] text-[20px] font-bold" />
                    </button>
                    <h1 className="md:font-bold md:text-3xl text-md">{title}</h1>
                </div>

                <div>
                    <input type="text" name="" id="" placeholder='Find Here ...' className=" transition-all outline-none hover:border-2 border-blue-300 px-2 text-xl text-gray-900 md:block rounded hidden" />
                </div>

                <div className='items-center flex gap-2 md:gap-4'>
                    <span> <HiOutlineMail className="cursor-pointer md:text-[30px] text-[24px] text-gray-600  hover:text-blue-400 transition-all " /> </span>
                    <span> <AiOutlinePhone className="cursor-pointer md:text-[30px] text-[24px] text-gray-600 hover:text-blue-400 transition-all" /> </span>
                    <img onClick={(e) => (profileOpen(e))} className='cursor-pointer w-7 md:w-10 h-7 md:h-10 rounded-[50%]' src="/images/admin.PNG" alt="" />
                </div>

                {showFaq && <Faq onClick={profileClose} />}
            </div>



        </header>
    )
}

export default Header