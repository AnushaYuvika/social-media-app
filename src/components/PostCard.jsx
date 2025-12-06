import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function PostCard({ post }){
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false)
  const shortTitle = post.title.length > 50 ? post.title.slice(0,50) + '...' : post.title
  const shortBody = post.body.length > 120 ? post.body.slice(0,120) + '...' : post.body

  return (
    <div className="card" onClick={() => navigate(`/item/${post.id}`)}>
      <div className="img-wrap">
        <img src={post.imgSrc} alt={post.title} />
      </div>
      <div className="card-content">
        <div className="user-id">User: {post.id}</div>
        <h3 className="card-title">Title: {shortTitle}</h3>
        <p className="card-body" onClick={(e)=>e.stopPropagation()}><b>Body: </b>  
          {expanded ? post.body : shortBody}
          {post.body.length > 120 && (
            <span className="read-more" onClick={(e)=>{ e.stopPropagation(); setExpanded(s=>!s) }}>
            {expanded ? ' Show less' : ' Read more...'}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}