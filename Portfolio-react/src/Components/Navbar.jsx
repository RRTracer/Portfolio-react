import PropTypes from 'prop-types'
import Darkmode from './Darkmode';
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useEffect, useState} from "react";

const Navbar = ({isLogin}) => {
    const nav = useNavigate();
    const location = useLocation();
    const [currentWindow, setCurrentWindow] = useState("");
    const [isLandingPage, setIsLandingPage] = useState(false);

    const item = [
        { name: "Home", href: "#home"},
        { name: "About", href: "#who" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact"}
    ]
    const item2 = [
        { name: "Home", path: "/"},
    ]
    useEffect(() => {
        const pages = {
            "/": { isLanding: true, name: null },
            "/about": { isLanding: false, name: "About" },
            "/projects": { isLanding: false, name: "Projects" },
            "/contact": { isLanding: false, name: "Contact" },
            "/dashboard": { isLanding: false, name: "Dashboard" },
        };

        const currentPage = pages[location.pathname] || { isLanding: false, name: null };
        setIsLandingPage(currentPage.isLanding);
        setCurrentWindow(currentPage.name);
    }, [location.pathname]);
  return (
    <>
        <div className="hover:cursor-pointer flex justify-between items-center p-4 dark:bg-neutral-800 bg-white shadow-2xl text-black dark:text-white w-full">
            <div className="text-3xl">Portfolio RRTracer</div>
            {!isLogin &&
                <div className=" flex flex-row items-center justify-center text-2xl space-x-4">
                    {isLandingPage && item.map((item, index) => (
                        <a key={index} href={item.href}>{item.name}</a>
                    ))
                    }
                    {isLandingPage && <a onClick={() => nav("/dashboard")} href="" >Dashboard</a> }
                    {currentWindow && item2.map((item2, index) => (
                        <a key={index} onClick={() => nav(item2.path)}>{item2.name}</a>
                    ))}
                </div>
            }
            <Darkmode />
        </div>
    </>
  )
}

Navbar.propTypes = {
    isLogin: PropTypes.bool,
}

export default Navbar