import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideNav from "./SideNav";
import { MdMenu } from "react-icons/md";

const DashboardLayout = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const location = useLocation();

  // Close sidebar if viewport is medium, large, etc
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setOpenSideNav(false); //
      }
    };

    // Call on initial render
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup resize event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // close side nav on route change
  useEffect(() => {
    if (location.pathname) {
      setOpenSideNav(false);
    }

    // cleanup function
    return () => {
      setOpenSideNav(false);
    };
  }, [location.pathname]);

  return (
    <div className="scrollbar-hide flex items-start gap-10">
      {/* Dashboard SideNav */}
      <SideNav
        open={openSideNav}
        onClose={() => setOpenSideNav(false)}
        isMdScreen={isMdScreen}
      />

      <section className="text-light mb-auto md:ml-[200px] flex-grow w-full flex flex-col">
        {/* Dashboard Header on mobile */}
        <header className="bg-secondary text-light md:hidden fixed top-0 flex items-center justify-between w-full px-5 py-3">
          <button onClick={() => setOpenSideNav(true)}>
            <MdMenu size={30} className="text-light" />
          </button>

          <div
            style={{ fontSize: "24px" }}
            className="text-3x1 text-light font-bold"
          >
            <Link to={"/"}>FBF</Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="md:py-0 md:mt-auto py-3 mt-16">
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
