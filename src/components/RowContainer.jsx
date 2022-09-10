import React, {useRef, useState, useEffect} from 'react'
import {MdOutlineAddShoppingCart} from "react-icons/md"
import { motion } from "framer-motion"
import { FaHotjar } from "react-icons/fa";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer'


const RowContainer = ({flag,data,scrollValue}) => {

  const rowContainer = useRef();

  const [items, setItems] = useState([])

  const [{cartItems}, dispatch] = useStateValue();

  const addToCart = () => {
    
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items
    })
    localStorage.setItem('cartItems', JSON.stringify(items))
  }

  useEffect(()=>{
    rowContainer.current.scrollLeft += scrollValue;
  },
  [scrollValue])

  useEffect(() => {
    addToCart()
  }, [items])

  return (
    <div 
      ref={rowContainer}
      className={`w-full my-4 flex items-center gap-6 bg-orange-50 p-5 scroll-smooth rounded-xl backdrop-blur-sm
      ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}
    >

    { data && data.map(item => (
        <motion.div whileHover={{scale:1.05}} 
        className="w-[300px] min-w-[300px] md:min-w-[340px] my-5 h-auto md:w-[300px] shadow-xl backdrop-blur-xl bg-gradient-to-tr from-white to-gray-100 rounded-lg p-4 ">

        <div key={item.id} className="w-full  flex items-center justify-between">
          <motion.div className="w-40 h-40 drop-shadow-md" whileHover={{ scale:1.15 }}>
            <img src={item.imageURL} 
            className="w-full h-full object-contain"
            alt=""/>
            
          </motion.div>


          <motion.div 
          onClick={()=> setItems([...cartItems, item])}
          whileTap={{ scale:"0.8" }}
          whileHover={{scale:1.1}}
          className="w-9 h-9 cursor-pointer rounded-full relative flex bg-red-600 items-center justify-center hover:shadow-lg">

            <MdOutlineAddShoppingCart className="flex text-white items-center justify-center" />

          </motion.div>
        </div>

        <div className="flex w-full flex-col gap-2 items-end justify-end">
          <p className="font-semibold text-base md:text-lg">
            {item.title}
          </p>
          <div className="flex text-lg items-center font-bold gap-4">
            <p><span>₹</span>{item.price}</p>
          </div>
          <div className="flex gap-2 items-center text-md">
          <FaHotjar />
          <p className="mt-[5px] text-textColor md:text-md">          
          {item.calories} Calories 
          </p> 
          </div>


        </div>


        </motion.div>
    ))}

    </div>
  )
}

export default RowContainer