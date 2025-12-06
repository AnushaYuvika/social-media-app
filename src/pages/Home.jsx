import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import Spinner from '../components/Spinner'
export default function Home(){
const { items, status, error } = useSelector(s => s.posts)
if(status === 'loading') return <div className="center"><Spinner /></div>
if(status === 'failed') return <div className="center error">{error}</div>

return (
  <div className="container">
    <h1 className="page-title">Latest Posts</h1>
    <div className="grid">
      {items.map(post=> <PostCard key={post.id} post={post} />)}
    </div>
  </div>
  )
}