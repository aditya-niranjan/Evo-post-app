import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from '../pages/Feed'
import CreatePost from '../pages/CreatePost'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/posts" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App