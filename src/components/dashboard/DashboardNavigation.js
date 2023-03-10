
import React from 'react'
import { DASHBOARD_NAV } from "../utility/utility"
import { Link } from 'react-router-dom';

const NavItem = DASHBOARD_NAV;

const DashboardNavigation = () => {

    return (
        <>
            <div className=" h-[94vh] overflow-x-auto dashboard transition-all">
                <div className="bg-white px-1 md:px-5  rounded-md space-y-1 md:space-y-3 flex flex-col border-b pt-2 pb-8 border-blue-400">
                    {NavItem.map((nav_item, index) => {
                        return (
                            <div key={index} className="hover:bg-gray-300 rounded-sm transition-all">
                                <Link
                                    className={`flex items-center gap-2 md:gap-4  rounded-md cursor-pointer px-1 md:px-3 py-2 md:py-2`}
                                    key={index}
                                    to={nav_item.href}

                                >
                                    <div className="text-gray-700 md:text-xl text-sm">
                                        {nav_item.icon}
                                    </div>
                                    <h4 className="font-semibold md:text-md text-sm text-[#0076be]">{nav_item.title}</h4>
                                </Link>
                            </div>
                        );
                    })}
                </div>



                <div className="">
                    <div className='flex flex-col items-center pt-6 pb-8 '>
                        <Link to="profile"><img className='md:w-[90px] md:h-[90px] w-[60px] h-[60px] rounded-[50%]' src="/images/admin.PNG" alt="" /></Link>
                        <h2 className='md:text-md text-[12px] font-semibold py-2'>RASADUL ISLAM</h2>
                        <p className='text-[10px] '>@2023 TAWBA. <br />  All Rights Reserved.</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default DashboardNavigation