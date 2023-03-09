import { useState } from "react";
import Header from "./Header";

import DashboardNavigation from "./dashboard/DashboardNavigation";
import DashbordShortNav from "./dashboard/DashbordShortNav";
import { Outlet } from "react-router-dom";


function Layout() {

    const [showNav, setShowNav] = useState(false)

    const nav = () => setShowNav(!showNav);

    return (
        <div>
            {/* <Header /> */}

            <Header onClick={nav} />


            <div className="flex md:flex-nowrap flex-wrap ">
                <div >

                    {showNav ? (
                        <DashboardNavigation />
                    ) : (
                        <DashbordShortNav />
                    )}


                </div>
                <div className=" overflow-y-auto h-[93vh] flex-1 border-[#d1d1d1] rounded border-l-[10px] border-t-[8px] md:border-l-[13px] md:border-t-[11px]">
                    <Outlet />
                </div>
            </div>


        </div>
    );
}

export default Layout;
