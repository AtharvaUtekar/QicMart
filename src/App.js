import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="flex w-screen h-auto flex-col ">
      <Header />
      <main className="w-full md:mt-20 mt-16 px-4 md:px-16 py-4">
        <Routes>
          {/*Main component*/}
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>

    </div>
    </AnimatePresence>

  )
}

export default App