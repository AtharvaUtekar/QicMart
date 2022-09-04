import React, { useState, useEffect } from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md"
import { actionType } from '../context/reducer'
import {motion} from 'framer-motion'
import { useStateValue } from "../context/StateProvider"

const CartItem = ({item,flag,setFlag}) => {
    
  const [{ cartItems }, dispatch] = useStateValue(); 
  const [items,setItems] = useState([])
  const [qty, setQty] = useState(item.qty)

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  }

  const updateQty = (action, id) => {
    if(action==="add"){ 
      setQty(qty+1)
      cartItems.map(item => {
        if(item.id===id) {
          item.qty +=1
          setFlag(flag+1)
        }
      })
      cartDispatch()
    }
    else{
      if(qty == 1){
        setItems(cartItems.filter((item) => item.id !== id))
        setFlag(flag+1)
        cartDispatch()
      }
      else{
        setQty(qty-1)
        cartItems.map(item => {
          if(item.id===id) {
            item.qty -=1
            setFlag(flag+1)
          }
        })
        cartDispatch()
      }
    }
    
  }

  useEffect(() =>{
    setItems(cartItems)
  }, [qty])
  

  return (
    <div key={item.id} className="w-full px-2 p-1 rounded-lg bg-cartItem flex items-center gap-2">
    <img src={item.imageURL}
      className="w-30 h-30 max-w-[60px] rounded-full object-contained" alt="Cart item"/>
    
    <div className="flex flex-col px-1 gap-3">
    <p className="text text-gray-50">{item?.title}</p>

    <p className="text text-gray-50"><span>₹</span>{parseFloat(item?.price) * qty}</p>

  </div>

  <div className="group text-white flex items-center gap-2 ml-auto cursor-ponter">

    <motion.div className="text-xl" whileHover={{ scale:1.1}} whileTap={{scale:0.8}} onClick={() => updateQty("add",item?.id)}>
      <MdAddCircleOutline />
    </motion.div>
    <p className="w-5 h-5 rounded-sm text-2xl text-gray-50 flex justify-center items-center">
      {qty}
    </p>
    <motion.div className="text-xl" whileHover={{ scale:1.1}} whileTap={{scale:0.8}} onClick={() => updateQty("remove",item?.id)}>
      <MdRemoveCircleOutline />
    </motion.div>

  </div>

  </div>
  )
}

export default CartItem