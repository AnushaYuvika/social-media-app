import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ItemDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, status } = useSelector(s => s.posts)
  if(status === 'loading') return <div className="center">Loading...</div>
  const post = items.find(p => p.id === Number(id))
  if(!post) return <div className="center">Post not found</div>

  return (
    <div className="container detail">
      <button className="back" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-card">
        <img src={post.imgSrc} alt={post.title} />
        <div className="detail-content">
          <div className="meta">User ID: {post.id}</div>
        <h2>Title: {post.title}</h2>
        <p><b>Body:</b> {post.body}</p>
      </div>
      </div>
    </div>
  )
}
