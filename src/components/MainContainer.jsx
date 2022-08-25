import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import HomeContainer from './HomeContainer'
import RowContainer from './RowContainer'
import {useStateValue} from '../context/StateProvider'

const MainContainer = () => {
  const [{foodItems} ] = useStateValue();

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mainContainer">
      <HomeContainer />
      <section className="w-full p-4 my-8">
      <div className="w-full flex items-center justify-between">
          <div className="w-full text-lg font-semibold relative capitalize before:absolute before:rounded-lg before:content before:w-20
           before:h-1 before:bottom-0 before:left-0 before:bg-orange-500 transition-all ease-in-out duration-500 py-3 ">
          <p>Our fresh and healthy fruits and veggies</p>
          <p>From our farms to your table!</p>
          </div>
        <div className="w-full gap-3 items-center hidden md:flex">
          <div className="w-8 h-8 bg-orange-300 shadow-sm hover:shadow-xl hover:bg-orange-600 transition-all duration-100 ease-in-out flex items-center justify-center rounded-lg"><MdChevronLeft className="text-xl text-white"/></div>
          <div className="w-8 h-8 bg-orange-300 shadow-sm hover:shadow-xl hover:bg-orange-600 transition-all duration-100 ease-in-out flex items-center justify-center rounded-lg"><MdChevronRight className="text-xl text-white"/></div>
        </div>

      </div>

      <RowContainer 
      flag={true} 
      data={foodItems?.filter((n)=>n.category==='icecreams')} 
      />

      </section>
    </div>
  )
}

export default MainContainer