import React from 'react'
import { useStateValue } from "../context/StateProvider"
import { actionType } from '../context/reducer'
import { motion } from "framer-motion"
import {IoArrowUndoOutline} from "react-icons/io5"
import { TbShoppingCartOff } from "react-icons/tb";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import EmptyCart from "../img/EmptyCart.jpg";

const CartContainer = () => {
  
  const [{cartShow, cartItems}, dispatch] = useStateValue();

  const showCart = () =>{
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }

  return (
    <div className="fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white shadow-xl z-[100] flex flex-col">
        <div className="w-full flex items-center justify-between p-4">

            <motion.div onClick={showCart} whileHover={{scale:1.12}} whileTap={{scale:0.88}} className="w-12 h-12 cursor-pointer bg-red-600 rounded-full flex items-center justify-center font-semibold">
                <IoArrowUndoOutline className="text-2xl text-white"/>
            </motion.div>

          <motion.p whileHover={{scale:1.12}} whileTap={{scale:0.88}} className="text font-semibold text-2xl items-center justify-center ">Cart</motion.p>

          <motion.p whileHover={{scale:1.12}} whileTap={{scale:0.88}} className="flex items-center justify-center gap-2 p-2 bg-slate-200 rounded-lg shadow-md hover:shadow-lg cursor-pointer">Clear <TbShoppingCartOff /></motion.p>

        </div>


        { cartItems && cartItems.length>0 ? 
          (
          <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">


          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">


            {cartItems && cartItems.map( item =>(
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

            ))}

          </div>

          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <div className="w-full flex items-center justify-between">

                <p className="text-gray-300 text-lg">Sub Total</p>
                <p className="text-gray-300 text-lg"><span>₹</span>550</p>

              </div>
              <div className="w-full flex items-center justify-between">

                <p className="text-gray-300 text-lg">Delivery charges</p>
                <p className="text-gray-300 text-lg"><span>₹</span>50</p>

              </div>
              <div className="w-full border-b border-gray-700 my-2"></div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-300 text-xl font-semibold">Total</p>
                <p className="text-gray-300 text-xl font-semibold"><span>₹</span>650</p>

              </div>

              <motion.button 
              type="button"
              className="w-full p-2 rounded-full bg-gradient-to-tr from-white to-gray-100 text-black font-semibold text-lg my-2 duration-85" 
              whileHover={{ scale:1.1}} 
              whileTap={{scale:0.8}}>
                Checkout
              </motion.button>

          </div>


          </div>) 

        :(
          <div className="w-full h-full fles flex-col items-center justify-center p-2">
          <img src={EmptyCart} className="items-center justify-center py-[30%]" alt="Empty cart" />

          </div>
        )}
     
    </div>
  )
}

export default CartContainer

{/*{ cartItems && cartItems.length>0 ? 
          (<div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">


          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">


            {cartItems && cartItems.map( item =>(
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

            ))}

          </div>

          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <div className="w-full flex items-center justify-between">

                <p className="text-gray-300 text-lg">Sub Total</p>
                <p className="text-gray-300 text-lg"><span>₹</span>550</p>

              </div>
              <div className="w-full flex items-center justify-between">

                <p className="text-gray-300 text-lg">Delivery charges</p>
                <p className="text-gray-300 text-lg"><span>₹</span>50</p>

              </div>
              <div className="w-full border-b border-gray-700 my-2"></div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-300 text-xl font-semibold">Total</p>
                <p className="text-gray-300 text-xl font-semibold"><span>₹</span>650</p>

              </div>

              <motion.button 
              type="button"
              className="w-full p-2 rounded-full bg-gradient-to-tr from-white to-gray-100 text-black font-semibold text-lg my-2 duration-85" 
              whileHover={{ scale:1.1}} 
              whileTap={{scale:0.8}}>
                Checkout
              </motion.button>

          </div>


          </div>) 

        :(
          <div className="w-full h-full fles flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300 " alt="Empty cart" />
          <p className="text-xl font-semibold ">
            Add items to your cart!
          </p>

          </div>

        )

        
        } */}