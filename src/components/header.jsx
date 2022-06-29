import React from 'react'
import Logo from "../img/logo.jpg"

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
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Services </li>
        </ul>

         

    </div>

    {/*For mobile devices */}
    <div className="flex md:hidden">

    </div>
    </div>
  )
}

export default header