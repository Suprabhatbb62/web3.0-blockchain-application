import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logo} alt="logo" className="w-32" />
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <NavLink to="/market" className="text-white text-base text-center mx-2 cursor-pointer">Market</NavLink>
                <NavLink to="/tuitorial" className="text-white text-base text-center mx-2 cursor-pointer">Tuitorial</NavLink>
                <NavLink to="https://finance-123com.blogspot.com/" target="_blank" className="text-white text-base text-center mx-2 cursor-pointer">Blog</NavLink>
                <NavLink to="/about" className="text-white text-base text-center mx-2 cursor-pointer">About</NavLink>
                <NavLink to="/contact" className="text-white text-base text-center mx-2 cursor-pointer">Contact</NavLink>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
            <p className="text-white text-sm text-center font-medium mt-2">Email: financecom6@gmail.com</p>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs"> finance-123.com</p>
            <p className="text-white text-right text-xs">@2024 | All rights reserved</p>
        </div>
    </div>
);

export default Footer;
