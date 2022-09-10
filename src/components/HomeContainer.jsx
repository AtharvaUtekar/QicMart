import React from 'react'
import delivery from '../img/delivery.png'
import hero1 from '../img/hero1.jpg'

const HomeContainer = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 1400,
      behavior: 'smooth',
  });
  };


  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">

    <div className="py-2 flex-1 flex flex-col items-start justify-center ">

        
      <div className="flex bg-orange-100 px-4 py-2 rounded-full ">

        <p className="text-base text-orange-500 font-semibold">Quick delivery</p>
        <div className="w-6 h-6 rounded-full overflow-hidden">
        <img src={delivery} alt="delivery" className="w-full h-full object-contain"/>
        </div>
      </div>

      <div className="pt-3">
      <p className="text-[2.25rem] font-bold tracking-wide text-headingColor">
      Hungry? 
      </p>
      <p className="text-[2.0rem] font-bold tracking-wide text-headingColor">
      Get your order delivered in just {" "}<span className="text-orange-400 text-[2.25rem]">19 Minutes!</span> 
      </p>
      <p className="text-[2.3rem] font-bold tracking-wide text-headingColor">
      The fastest delivery {" "}
      <span className="text-orange-600 text-[2.8rem]">In Your City</span>{" "}
      
      </p>
      
      <button 
      onClick={handleClick}
      className="rounded-xl bg-orange-600  text-[1.5rem] text-white w-35 h-15 px-5 py-2 mt-5 md:items-start items-center justify-center shadow-2xl" 
      type="button">
      Order Now</button>


      </div>

      


    </div>

    
    <div id="second" className="py-2 flex-1 flex items-center relative">
       
         <img src={hero1} className="lg:h-650 lg:w-auto h-250 ml-auto rounded-xl shadow-xl" alt="hero bg img"/>
        
    </div>

    </section>
  )
}

export default HomeContainer