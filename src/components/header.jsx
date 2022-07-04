import React from 'react'
import Logo from "../img/logo.jpg"
import {MdOutlineShoppingCart} from "react-icons/md"
import Avatar from "../img/avatar.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
    {/*For desktop devices */}
    <div className="hidden md:flex w-full ">
        <Link to={"/"} className="flex items-center ">
            <img src={Logo} className="w-12 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">QicMart</p>
        </Link>


        <div className="flex items-center ml-auto gap-3">
        {/*List of menu */}
        <ul className="flex item-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services </li>
        </ul>

        {/*Cart section */}
        <div className="relative flex">
          <MdOutlineShoppingCart className="text-2xl ml-8 cursor-pointer " />
          <div className="w-5 h-5 drop-shadow-xl absolute -top-3 -right-2 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold" >10</p>
          </div>
        </div>
        <div className="flex ml-5 item-center">
          <motion.img whileTap={{scale:0.7}} src={Avatar} className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer" alt="Avatar"/>
        </div>
      
        

        </div>         

    </div>

    {/*For mobile devices */}
    <div className="flex md:hidden">

    </div>
    </div>
  )
}

export default header