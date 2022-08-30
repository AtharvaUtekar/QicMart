import React from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const CartItem = ({item}) => {
    
  return (
    <div key={item.id} className="w-full px-2 p-1 rounded-lg bg-cartItem flex items-center gap-2">
    <img src={item.imageURL}
      className="w-30 h-30 max-w-[60px] rounded-full object-contained" alt="Cart item"/>
    
    <div className="flex flex-col px-1 gap-3">
    <p className="text text-gray-50">{item?.title}</p>
    <p className="text text-gray-50"><span>₹</span>{item?.price}</p>

  </div>

  <div className="group text-white flex items-center gap-2 ml-auto cursor-ponter">

    <motion.div className="text-xl" whileHover={{ scale:1.1}} whileTap={{scale:0.8}}>
      <MdAddCircleOutline />
    </motion.div>
    <p className="w-5 h-5 rounded-sm text-2xl text-gray-50 flex justify-center items-center">
      {item.qyy}
    </p>
    <motion.div className="text-xl" whileHover={{ scale:1.1}} whileTap={{scale:0.8}}>
      <MdRemoveCircleOutline />
    </motion.div>

  </div>

  </div>
  )
}

export default CartItem