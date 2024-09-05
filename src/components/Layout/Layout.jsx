import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
const Layout = () => {
  return (
    <div className="capitalize">
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
