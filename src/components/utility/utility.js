import { BiUser, BiDollar } from "react-icons/bi";
import { AiFillDashboard, AiOutlineProject, AiFillNotification, AiOutlineSetting } from "react-icons/ai";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import Dashbord from "../pages/Dashbord";
import Sheet from "../pages/Sheet";
import Notice from "../pages/Notice";
import Employe from "../pages/Employe";
import Payment from "../pages/Payment";
import Project from "../pages/Project";
import Setting from "../pages/Setting";



export const DASHBOARD_NAV = [
    {
        title: "Dashboard",
        href: '/',
        icon: <AiFillDashboard />,
        content: <Dashbord />
    },
    {
        title: "Project",
        href: '/project',
        icon: <AiOutlineProject />,
        content: <Project />
    },
    {
        title: "Payment",
        href: '/payment',
        icon: <BiDollar />,
        content: <Payment />
    },
    {
        title: "Employe",
        href: '/employe',
        icon: <BiUser />,
        content: <Employe />
    },
    {
        title: "Notice",
        href: '/notice',
        icon: <AiFillNotification />,
        content: <Notice />
    },

    {
        title: "Sheet",
        href: '/sheet',
        icon: <BsFileEarmarkSpreadsheetFill />,
        content: <Sheet />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <AiOutlineSetting />,
        content: <Setting />
    },

    // {
    //     title: "Settings",
    //     href: '/setting',
    //     icon: <TbAddressBook />,
    //     content: <Setting />
    // },

    // {
    //     title: "Settings",
    //     href: '/setting',
    //     icon: <TbAddressBook />,
    //     content: <Setting />
    // },

    // {
    //     title: "Settings",
    //     href: '/setting',
    //     icon: <TbAddressBook />,
    //     content: <Setting />
    // },

    // {
    //     title: "Settings",
    //     href: '/setting',
    //     icon: <TbAddressBook />,
    //     content: <Setting />
    // },

    // {
    //     title: "Settings",
    //     href: '/setting',
    //     icon: <TbAddressBook />,
    //     content: <Setting />
    // },

    // {
    //     title: "Settings",
    //     href: '/setting',
    //     icon: <TbAddressBook />,
    //     content: <Setting />
    // },

    // {
    //     title: "Settings",
    //     href: '/setting',
    //     icon: <TbAddressBook />,
    //     content: <Setting />
    // },



];