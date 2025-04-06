import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";

function Layout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}

export default Layout;
