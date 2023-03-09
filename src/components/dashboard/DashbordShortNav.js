import React from 'react'
import { DASHBOARD_NAV } from "../utility/utility"
import { Link } from 'react-router-dom';

const NavItem = DASHBOARD_NAV;

const DashbordShortNav = () => {
    return (

        <div className=" h-[93vh] overflow-x-auto dashboard transition-all">
            <div className="bg-white  rounded-md space-y-2 md:space-y-3 pt-0 md:pt-2 flex flex-col px-1  md:px-4">
                {NavItem.map((nav_item, index) => {
                    return (
                        <div key={index} className="hover:bg-slate-300 transition-all ">
                            <Link
                                className={`flex items-center gap-4  rounded-md cursor-pointer p-2`}
                                key={index}
                                to={nav_item.href}

                            >
                                <div className="text-gray-600 text-xl  md:text-2xl">
                                    {nav_item.icon}
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DashbordShortNav