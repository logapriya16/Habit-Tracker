import React from 'react'
import "./LandingPage.css"
import { Link } from 'react-router-dom'
export default function LandingPage() {
  return (
    <div className='landing-container'>
      <h1>Improove</h1>
      <div className='section-hero'>

      </div>
      <div>
        <h2>Get Started Today and have a productive Life</h2>
        <Link to='/habits'>Create a New Habit</Link>
      </div>
    </div>
  )
}
