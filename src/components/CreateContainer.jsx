import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAddPhotoAlternate} from 'react-icons/md';
import { FaRupeeSign } from "react-icons/fa";
import {categories} from '../utils/data'
import Loader from '../components/Loader'
import {storage} from '../firebase.config'
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);

  const uploadImage = (e) => { 
    setLoading(true);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on('state_changed', 
    (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, 
    (error) => {
      setFields(true);
      setMsg('Error while uploading try again');
      setAlertStatus('danger');

      setTimeout(() => {
        setFields(false);
        setLoading(false);
      }, 4000);
    }, 
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setImageAsset(downloadURL);
        setLoading(false);
        setFields(true);
        setAlertStatus("success");
        setMsg('Image upload successful');
        setTimeout(() => {
          setFields(false);
        }, 4000);
      })
    })
  }

  const deleteImage = () => {

  }
  
  const saveDetails = () => {

  }

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
        <select onChange={(e)=>setCategory(e.target.value)} className="w-full outline-none border-b-2 p-2 placeholder: rounded-md curcor-pointer gap-4 text-gray-400 font-semibold">
          <option value="other" className="bg-white text-gray-400"><p className="text-gray-400">Select category</p></option>
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
          {loading ? <Loader /> : <>
          {!imageAsset ? 
            <label className='w-full h-full flex flex-col items-center justify-content cursor-pointer'>
              <div className='w-full h-full flex flex-col items-center justify-content cursor-pointer md:p-[5rem] p-[2rem] gap-2'>
                <MdAddPhotoAlternate className="text-gray-500 text-3xl hover:text-gray-800 "/>
                <p className="text-gray-500 text-3xl hover:text-gray-800 inline-flex">Click here to upload photo</p>
              </div> 
              <input type="file" name="iploadimage" accept="image/*" onChange={uploadImage} className="w-0 h-0"></input>
            </label> : 
            <div className="relative h-full "> 
              <img src={imageAsset} alt="uploaded image" className="w-full h-full object-cover" />
              <button type="button" className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 cursor-pointer text-xl outine-none"
                onClick={deleteImage}

              ><MdDelete className="text-white"/>
              </button>
            </div>

          }
          </>}
      </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-500 flex items-center gap-2 "> 
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input 
            required 
            type="text"
            value={calories}
            onchange={(e)=>setCalories(e.target.value)}
            placeholder="Calories" 
            className="w-full h-full text-lg bg-transparent outine-none border-none text-textColor placeholder:text-gray-400"></input>
          </div>
        </div>
 
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-500 flex items-center gap-2 "> 
            <FaRupeeSign className="text-gray-700 text-2xl" />
            <input 
            type="text"
            value={price}
            onchange={(e)=>setPrice(e.target.value)}
            required 
            placeholder="Price" 
            className="w-full h-full text-lg bg-transparent outine-none border-none text-textColor placeholder:text-gray-400"></input>
          </div>
        </div>

        <div className="flex items-center w-full ">
          <button type="button" className="ml-0 md:ml-auto w-full border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
          onClick={saveDetails}>
            Save
          </button>
        </div>

      </div>

    </div>
  )
}

export default CreateContainer