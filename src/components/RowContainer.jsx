import React from 'react'
import {MdOutlineAddShoppingCart} from "react-icons/md"
import { motion } from "framer-motion"

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>

        <motion.div whileHover={{scale:1.05}} className="w-[300px] my-5 h-auto md:w-[300px] shadow-xl backdrop-blur-xl bg-gray-100 rounded-lg p-4 ">

        <div className="w-full flex items-center justify-between">
          <motion.img src="https://firebasestorage.googleapis.com/v0/b/qmart-6ecd3.appspot.com/o/Images%2F1658424547289-i1.png?alt=media&token=c73d3329-d62c-475f-8b91-504ac5c009bf" 
          className="w-40 h-40"
          alt=""/>

          <motion.div 
          whileTap={{ scale:"0.8" }}
          whileHover={{scale:1.15}}
          className="w-9 h-9 rounded-full relative flex bg-red-600 items-center justify-center hover:shadow-lg">

            <MdOutlineAddShoppingCart className="flex text-white items-center justify-center" />

          </motion.div>
        </div>

        <div className="flex w-full flex-col gap-2 items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Choco overload ice cream
          </p>
          <p className="mt-[5px] text-gray-500 font-semibold md:text-md">
            275 Calories 
          </p>
          <div className="flex text-gray-700 text-lg items-center font-bold gap-4">
            <p><span>₹</span>175</p>
          </div>
        </div>


        </motion.div>

    </div>
  )
}

export default RowContainer