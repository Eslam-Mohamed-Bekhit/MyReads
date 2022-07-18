import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export default function footer() {
  const navigate = useNavigate();

  return (
    <div className="open-search">
      <button onClick={() => navigate("/search")
      }>Add a book</button>
    </div>)
}
