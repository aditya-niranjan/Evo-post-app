import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from '../pages/Feed'
import CreatePost from '../pages/CreatePost'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App