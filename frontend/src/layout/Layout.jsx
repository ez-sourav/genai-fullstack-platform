import { Outlet } from "react-router-dom";
import Navbar from "../features/auth/components/Navbar";
import Footer from "../features/auth/components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;