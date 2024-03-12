import React from 'react'
import Alert from "react-bootstrap/Alert";


const Welcome = () => {
  return (
    <div className='bg-info'>
        <h1 className= "text-center">Welcome to Copperfield & Twist!</h1>
        <h2>Unlock Your Imagination,</h2>
        <h2>One Page at a Time.</h2>
        <p>Where Stories come to life and adventures await on every page.Explore a 
          world of  imagination and fantasy.
        </p>
        <Alert variant="info">Go to Store</Alert>  
    </div>
  )
}

export default Welcome;