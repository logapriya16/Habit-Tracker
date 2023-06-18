import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideNav() {
    const navigate = useNavigate()
  return (
    <div className='nav-container'>
      <div className="nav-element" onClick={()=>navigate('/')} >Home</div>
      <div className="nav-element" onClick={()=>navigate('/habits')}>Habits</div>
      <div className="nav-element" onClick={()=>navigate('/archive')}>Archive</div>
    </div>
  )
}
