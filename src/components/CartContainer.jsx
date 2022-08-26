import React from 'react'
import { motion } from "framer-motion"
import {IoArrowUndoOutline} from "react-icons/io5"

const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white shadow-xl z-[101] flex flex-col">
        <motion.div className="w-full flex items-center justify-between p-4" whileHover={{scale:1.01}} whileTap={{scale:0.98}}>

            <div className={`" w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-semibold"`}>
                <IoArrowUndoOutline className="text-2xl text-white"/>
            </div>

        </motion.div>
    </div>
  )
}

export default CartContainer