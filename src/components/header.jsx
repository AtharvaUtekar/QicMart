import React from 'react'
import Logo from "../img/logo.jpg"
import {MdOutlineShoppingCart} from "react-icons/md"


const header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
    {/*For desktop devices */}
    <div className="hidden md:flex w-full ">
        <div className="flex items-center gap-2">
            <img src={Logo} className="w-12 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">QicMart</p>
        </div>
        <ul className="flex item-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services </li>
        </ul>
        <div className="relative flex  ">
          <MdOutlineShoppingCart className="text-2xl ml-8 cursor-pointer" />
          <div className="w-10 h-10 rounded-full bg-cartNumBg">10</div>
        </div>

         

    </div>

    {/*For mobile devices */}
    <div className="flex md:hidden">

    </div>
    </div>
  )
}

export default header