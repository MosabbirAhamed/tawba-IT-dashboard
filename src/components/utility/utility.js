import { BiUser } from "react-icons/bi";
import { FiSliders } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { TbAddressBook } from "react-icons/tb";
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
        icon: <FiSliders />,
        content: <Dashbord />
    },
    {
        title: "Project",
        href: '/project',
        icon: <BsCart />,
        content: <Project />
    },
    {
        title: "Payment",
        href: '/payment',
        icon: <BiUser />,
        content: <Payment />
    },
    {
        title: "Employe",
        href: '/employe',
        icon: <TbAddressBook />,
        content: <Employe />
    },
    {
        title: "Notice",
        href: '/notice',
        icon: <TbAddressBook />,
        content: <Notice />
    },

    {
        title: "Sheet",
        href: '/sheet',
        icon: <TbAddressBook />,
        content: <Sheet />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },

    {
        title: "Settings",
        href: '/setting',
        icon: <TbAddressBook />,
        content: <Setting />
    },


];