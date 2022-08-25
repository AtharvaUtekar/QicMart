import React,{useState,useEffect} from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import {categories} from '../utils/data'
import { motion } from "framer-motion"


const MenuContainer = () => {
  
    const [filter, setFilter] = useState('chicken');

    useEffect(() => {},[filter]);

    return (
        <section className="w-full p-4 my-8" id="menu">
        <div className="w-full flex flex-col items-center justify-center">

            <div className="w-full text-xl font-semibold relative capitalize before:absolute before:rounded-lg before:content before:w-20
                before:h-1 before:bottom-0 before:left-0 before:bg-orange-500 transition-all ease-in-out duration-500 py-3 ">
                <h3>Our Lip Smacking Dishes</h3>
                <p></p>
            </div>

            <div className="w-full py-6 flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none ">
            
            {categories && categories.map( category => (
                <motion.div 
                whileHover={{scale:1.1}} 
                key={category.id} 
                onClick={() => setFilter(category.urlParamName)}
                className={`"group ${filter === category.urlParamName ? 'bg-red-500' : 'bg-white' } bg-white w-26 px-2 min-w-[96px] h-28 cursor-pointer rounded-lg drop-shadow-lg
                flex flex-col gap-3 items-center justify-center hover:bg-red-500 duration-80 transition-all ease-in-out"`}
                
                >

                    <div className={`" w-12 h-12 rounded-full bg-red-600  ${filter === category.urlParamName ? 'bg-white' : 'bg-red-500'} flex items-center justify-center
                     text-white group-hover:text-black group-hover:bg-white"`}>
                        <IoFastFoodOutline className="text-xl" />
                        
                    </div>
                    <p className="text-lg text-black flex flex-col ">
                       {category.name}
                    </p>

                </motion.div>
            )) } 


            </div>


        </div>
        </section>
    )
}

export default MenuContainer