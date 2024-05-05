import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary w-full overflow-x-hidden">
      <Header />
      <main className="mb-auto mt-20">
        <Outlet />
      </main>
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default RootLayout;
