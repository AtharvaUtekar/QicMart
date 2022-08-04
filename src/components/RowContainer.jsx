import React from 'react'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>

        <div className="w-full h-20 md:w-[350px] shadow-lg backdrop-blur-lg bg-gray-200">

        <div className="w-full flex">

        </div>

        </div>

    </div>
  )
}

export default RowContainer