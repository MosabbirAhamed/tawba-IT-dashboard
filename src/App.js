import { Routes, Route, } from "react-router-dom";
import Layout from "./components/Layout";
import { DASHBOARD_NAV } from "./components/utility/utility"
import NotFound from "./components/pages/NotFound";
import Profile from "./components/pages/Profile";
import LogOut from "./components/pages/LogOut";
import FAQ from "./components/pages/FAQ";


const NavItem = DASHBOARD_NAV;

function App() {

  return (


    <Routes>

      <Route path="/" element={<Layout />} >
        {NavItem.map((nav_item, index) => {
          return (
            <Route key={index} path={nav_item.href} element={nav_item.content} />
          );
        })}
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/faq"} element={<FAQ />} />
        <Route path={"/logout"} element={<LogOut />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>

  );
}

export default App;
