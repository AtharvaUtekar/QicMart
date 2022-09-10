import React from 'react'
import { motion } from "framer-motion"
import offers1 from "../img/offers1.jpg"
import offers0 from "../img/offers0.webp"
import offers11 from "../img/offers11.jpg"
import offers2 from "../img/offers2.jpg"
import offers3 from "../img/offers3.webp"


const OffersContainer = () => {
  return (
    <div 
    className="w-full mb-[50px] my-0 p-6 pt-0 flex items-center gap-6 overflow-x-scroll scrollbar-none scroll-smooth rounded-xl backdrop-blur-lg">

        <motion.img 
            src={offers0}  whileHover={{scale:1.055}} 
            className="h-auto w-[325px] min-w-[325px] md:min-w-[370px] md:w-[350px] shadow-xl object-contain rounded-xl"
            alt=""/>
                    <motion.img 
            src={offers1}  whileHover={{scale:1.055}} 
            className="h-auto w-[325px] min-w-[325px] md:min-w-[370px] md:w-[350px] shadow-xl object-contain rounded-xl"
            alt=""/>
        <motion.img 
            src={offers11}  whileHover={{scale:1.055}} 
            className="h-auto w-[325px] min-w-[325px] md:min-w-[370px] md:w-[350px] shadow-xl object-contain rounded-xl"
            alt=""/>
        <motion.img 
            src={offers3}  whileHover={{scale:1.055}} 
            className="h-full w-[325px] min-w-[325px] md:min-w-[370px] md:w-[350px] shadow-xl object-contain rounded-xl"
            alt=""/>
        <motion.img 
            src={offers2}  whileHover={{scale:1.055}} 
            className="h-full w-[325px] min-w-[325px] md:min-w-[370px] md:w-[350px] shadow-xl object-contain rounded-xl"
            alt=""/>


  </div>
  )
}

export default OffersContainer