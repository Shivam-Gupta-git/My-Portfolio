import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCollections, MdOutlineCancel } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropDownRef = useRef();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handelCloseSidebar = () => setSidebarOpen(false);

  /* NAV LINKS */
  const navLinks = (
    <>
      {["/", "Work", "/About", "/Contact"].map((path, i) => (
        <NavLink
          key={i}
          to={
            path === "Work"
              ? "https://frontend-projects-one-self.vercel.app"
              : path
          }
          className={({ isActive }) =>
            `relative px-2 py-1 text-sm font-medium transition 
            ${
              isActive
                ? "text-blue-400"
                : "text-gray-200 hover:text-blue-400"
            }
            after:absolute after:left-0 after:-bottom-1 after:h-0.5
            after:w-full after:scale-x-0 after:bg-blue-400
            after:transition after:duration-300 hover:after:scale-x-100`
          }
        >
          {path === "/" ? "Home" : path === "Work" ? "Work" : path.slice(1)}
        </NavLink>
      ))}
    </>
  );

  /* SIDEBAR LINKS */
  const sidebarLinks = (
    <>
      <NavLink
        to="/"
        onClick={handelCloseSidebar}
        className="sidebar-link"
      >
        <IoHomeOutline /> Home
      </NavLink>

      <NavLink
        to="https://frontend-projects-one-self.vercel.app"
        onClick={handelCloseSidebar}
        className="sidebar-link"
      >
        <MdOutlineCollections /> Work
      </NavLink>

      <NavLink
        to="/About"
        onClick={handelCloseSidebar}
        className="sidebar-link"
      >
        <AiOutlineInfoCircle /> About
      </NavLink>

      <NavLink
        to="/Contact"
        onClick={handelCloseSidebar}
        className="sidebar-link"
      >
        <IoIosContact /> Contact
      </NavLink>
    </>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={dropDownRef}
        className="w-full h-14 sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg"
      >
        <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <Link
            to="/"
            className="text-blue-400 font-bold text-lg tracking-wide"
          >
            Portfolio
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks}
          </div>

          {/* MOBILE MENU ICON */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <div
        className={`fixed inset-0 z-40 transition ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={handelCloseSidebar}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[70%] sm:w-[50%] bg-gray-900 border-r border-white/10
          transform transition-transform duration-500 ease-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Sidebar Header */}
          <div className="h-14 flex items-center justify-between px-5 border-b border-white/10">
            <span className="text-blue-400 font-bold text-lg">
              Portfolio
            </span>
            <MdOutlineCancel
              onClick={toggleSidebar}
              className="text-gray-300 text-2xl cursor-pointer hover:text-blue-400 transition"
            />
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col mt-4">{sidebarLinks}</div>
        </div>
      </div>

      {/* STYLES */}
      {/* <style jsx>{`
        .sidebar-link {
          height: 44px;
          padding: 0 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e5e7eb;
          font-size: 0.95rem;
          transition: all 0.3s;
        }
        .sidebar-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #60a5fa;
        }
      `}</style> */}
    </>
  );
}

export default Navbar;