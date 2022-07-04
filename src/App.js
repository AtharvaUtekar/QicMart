import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'

const App = () => {
  return (
    <AnimatePresence>
    <div className="flex w-screen h-auto flex-col ">
      <Header />
      <Routes>
        {/*Main component*/}
        <Route path="/*" element={<MainContainer />} />
        <Route path="/createItem" element={<CreateContainer />} />
      </Routes>
    </div>
    </AnimatePresence>

  )
}

export default App