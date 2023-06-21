import { Outlet } from "react-router-dom";
import Navbar from "../../components/global/layout/Navbar";
import Sidebar from "../../components/global/layout/Sidebar"; 
import "../../components/global/layout/layout.css"
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar className = "sidebar"/>
        <Outlet className = "outlet"/>
      </div>
    </>
  );
};

export default Layout;
