import React from 'react'
import footerImg from '../img/FooterImg.png'
import collage from '../img/foodcollage.jpeg'

const FooterContainer = () => {


  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 w-full mb-10">

    <div id="first" className="py-2 flex-1 flex items-center relative">
            
        <img src={collage} className="lg:h-700 lg:w-auto sm:h-550 h-250 ml-auto rounded-xl shadow-2xl" alt="footer bg img"/>
            
    </div>

    <div className="py-2 flex-1 flex flex-col items-start h-25 justify-center">

    <img src={footerImg} className="lg:h-250 lg:w-auto sm:h-[500px] h-[400px] ml-auto rounded-xl shadow-2xl" alt="footer bg img"/>

    </div>

    


    </section>
  )
}

export default FooterContainer