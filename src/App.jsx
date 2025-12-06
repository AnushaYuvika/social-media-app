import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './features/postsSlice'


export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchPosts())
  }, [dispatch])

  return (
  <div>
    <header className="topbar">
      <Link to="/" className="brand">Social Media App</Link>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>

    <footer className="footer">Made for Module Test</footer>
  </div>
  )
}