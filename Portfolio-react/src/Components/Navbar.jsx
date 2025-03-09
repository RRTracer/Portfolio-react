import PropTypes from "prop-types";
import Darkmode from "./Darkmode";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "./Logout";

const Navbar = ({ isLogin, date }) => {
  const nav = useNavigate();
  const location = useLocation();
  const [currentWindow, setCurrentWindow] = useState("");
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isLog, setIsLog] = useState(false);
  const item = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#who" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const item2 = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Features", path: "/features" },
  ];
  useEffect(() => {
    const pages = {
      "/": { isLanding: true, name: null },
      "/dashboard": {
        isLanding: false,
        name: "Dashboard",
        path: "/dashboard",
      },
      "/cve-pages": {
        isLanding: false,
        name: "Cve Pages",
        path: "/cve-pages",
      },
      "/features": {
        isLanding: false,
        name: "Features",
        path: "/features",
      },
    };
    const tmp = localStorage.getItem("authToken");
    if (tmp) setIsLog(true);
    const currentPage = pages[location.pathname] || {
      isLanding: false,
      name: null,
    };
    setIsLandingPage(currentPage.isLanding);
    setCurrentWindow(currentPage.name);
    setCurrentPath(currentPage.path);
  }, [location.pathname]);
  return (
    <>
      <div className="hover:cursor-pointer flex justify-between items-center p-4 dark:bg-neutral-800 bg-white shadow-2xl text-black dark:text-white w-full">
        <div className="text-3xl">Portfolio RRTracer</div>
        {!isLogin && (
          <div className=" flex flex-row items-center justify-center text-2xl space-x-4">
            {isLandingPage &&
              item.map((item, index) => (
                <a
                  className="hover:underline hover:text-gray-500"
                  key={index}
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            {isLandingPage && (
              <a
                className="hover:underline hover:text-gray-500"
                onClick={() => nav("/dashboard")}
                href=""
              >
                Dashboard
              </a>
            )}
            {currentWindow &&
              item2
                .filter((item) => item.path !== currentPath)
                .map((item2, index) => (
                  <a
                    className="hover:underline hover:text-gray-500"
                    key={index}
                    onClick={() => nav(item2.path)}
                  >
                    {item2.name}
                  </a>
                ))}
          </div>
        )}
        <div className="absolute right-70">{isLog && <Logout />}</div>
        <h1 className="text-2xl absolute right-35">{date}</h1>
        <Darkmode />
      </div>
    </>
  );
};

Navbar.propTypes = {
  isLogin: PropTypes.bool,
  date: PropTypes.string,
};

export default Navbar;
