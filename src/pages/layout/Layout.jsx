import { Outlet } from "react-router-dom";
import Navbar from "../../components/global/layout/Navbar";
import Sidebar from "../../components/global/layout/Sidebar"; 
import "../../components/global/layout/layout.css"
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <div>
          <Sidebar className = "sidebar"/>
          <Outlet className = "outlet"/>
        </div>
      </div>
    </>
  );
};

export default Layout;
