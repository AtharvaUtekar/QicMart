import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.jpg"
import {MdOutlineShoppingCart, MdAdd, MdLogout } from "react-icons/md"

import Avatar from "../img/avatar.png"
import { motion } from "framer-motion"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import { useStateValue } from "../context/StateProvider"
import { actionType } from '../context/reducer'

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if(!user){
      const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    });
    localStorage.setItem('user', JSON.stringify( providerData[0]));
    }
    else{
      setisMenu(!isMenu);
    }
  }

  const logout = () =>{
    setisMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };


  return (
    <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
    {/*For desktop devices */}
    <div className="hidden md:flex w-full ">
        <Link to={"/"} className="flex items-center ">
            <img src={Logo} className="w-12 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">QicMart</p>
        </Link>

        <div className="flex items-center ml-auto gap-3">
        {/*List of menu */}
        <motion.ul 
        initial={{ opacity:0, x:200 }}
        animate={{ opacity:1, x:0 }}
        exit={{ opacity:0, x:200 }}
        className="flex item-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services </li>
        </motion.ul>

        {/*Cart section */}
        <div className="relative flex">
          <MdOutlineShoppingCart className="text-2xl ml-8 mr-4 cursor-pointer " />
          <div className="w-5 h-5 drop-shadow-xl absolute -top-3 right-2 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold" >10</p>
          </div>
        </div>

        <div className="relative">
          <motion.img 
          whileTap={{scale:0.7}} 
          /*src={user ? user.photoURL : Avatar}*/
          src={Avatar} 
          className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full " alt="Avatar"
          onClick={login}
          />
          {isMenu && 
            <motion.div 
            initial={{ opacity:0, scale:0.7 }} 
            animate={{ opacity:1, scale:1}}
            exit={{ opacity:0, scale:0.7 }}
            className="flex flex-col w-40 bg-gray-50 shadow-2xl cursor-pointer hover:bg-slate-100 ease-in-out rounded-lg absolute top-11 right-1 px-4 py-2">
            {
              user && user.email==="atharva23b@gmail.com" && 
              (
                <Link to={"/createItem"}>
                <p className=" flex items-center p-2 gap-3 cursor-pointer hover:bg-slate-100 transition-a11 duration-100 ease-in-out text-textColor text-base">New Item <MdAdd/></p>
                </Link>
              )
            }
            <p className="rounded-md p-2 justify-center shadow-lg text-white bg-red-500 flex items-center gap-3 cursor-pointer hover:bg-red-700 transition-a11 duration-100 ease-in-out text-base">Logout <MdLogout/></p>
          </motion.div>
          }


        </div>      
      
      </div>         

    </div>

    {/*For mobile devices */}
   

    <div className="flex items-center justify-between w-full h-full md:hidden">
      <div className="relative flex">
          <MdOutlineShoppingCart className="text-2xl ml-4 cursor-pointer " />
          <div className="w-5 h-5 drop-shadow-xl absolute -top-3 right-2 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold" >10</p>
          </div>
        </div>

      <Link to={"/"} className="flex items-center ">
            <img src={Logo} className="w-12 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">QicMart</p>
      </Link>

      <div className="relative">
          <motion.img 
          whileTap={{scale:0.7}} 
          /*src={user ? user.photoURL : Avatar}*/
          src={Avatar} 
          className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full " alt="Avatar"
          onClick={login}
          />
          {isMenu && 
            <motion.div 
            initial={{ opacity:0, scale:0.7 }} 
            animate={{ opacity:1, scale:1}}
            exit={{ opacity:0, scale:0.7 }}
            className="flex flex-col w-40 bg-gray-50 shadow-2xl cursor-pointer hover:bg-slate-100 ease-in-out rounded-lg absolute top-11 right-1">
            {
              user && user.email==="atharva23b@gmail.com" && 
              (
                <Link to={"/createItem"}>
                <p className="flex gap-3 cursor-pointer hover:bg-slate-100 transition-a11 duration-100 ease-in-out text-textColor text-base px-4 py-2">New Item <MdAdd/></p>
                </Link>
              )
            }
 
        <ul className="flex flex-col gap-4 px-4 py-2 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer onClick={()=> setisMenu(false);}">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer onClick={()=> setisMenu(false);}">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer onClick={()=> setisMenu(false);}">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer onClick={()=> setisMenu(false);}">Services </li>
        </ul>

            <p className="m-2 p-2 rounded-lg shadow-md text-white bg-red-500 flex items-center gap-4 cursor-pointer hover:bg-slate-200 transition-a11 duration-100 ease-in-out  text-base justify-center px-4 py-3"
               onClick={logout}
            >Logout <MdLogout/></p>
          </motion.div>
          }


        </div>   

    </div>
    </div>
  )
}

export default Header