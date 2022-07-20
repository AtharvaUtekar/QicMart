import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { MdFastfood } from 'react-icons/md';
import {categories} from '../utils/data'
import Loader from '../components/Loader'

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-auto items-center justify-center min-h-screen">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4 ">
      {

        fields && (
          <p className={`w-full p-2 rounded-lg text-center ${alertStatus === 'danger'? 'bg-red-400 text-red-600':' bg-emerald-700 text-emerald-400'}`}>
            {msg}
          </p>
        )
      }    

      <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 ">
        <MdFastfood className="text-xl text-gray-700"/>
        <input type="text" required value={title} 
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Give me a title" className="w-full h-full bg-transparent rounded-lg font-semibold border-none outline-none">
        </input>

      </div>
      <div className="w-full">
        <select onChange={(e)=>setCategory(e.target.value)} className="w-full outline-none border-b-2 p-2 rounded-md curcor-pointer gap-4">
          <option value="other" className="bg-white">Select category</option>
          {categories && categories.map(item => (
            <option key={item.id} 
            value={item.urlParamName}
            className="text-base border-0 outline-none capitalize text-headingColor"
            >
              {item.name}
            </option>
          ))}
        </select>

      </div>

      <div className="group justify-center items-center h-225 md:h-420 border-2 border-dotted border-gray-300 w-full cursor-pointer rounded-lg ">
          {loading ? <Loader /> : <></>}
      </div>

      </div>

    </div>
  )
}

export default CreateContainer