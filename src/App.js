import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/header'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'

const App = () => {
  return (
    <div className="flex w-screen h-auto flex-col ">
      <Header />
      <Routes>
        {/*Main component */}
        <Route path="/*" element={<MainContainer />} />
        <Route path="/createItem" element={<CreateContainer />} />
      </Routes>
    </div>

  )
}

export default App