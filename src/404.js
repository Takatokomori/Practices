import React from 'react'
import "./styles/noPage.css"

export default function NoPage() {
  return (
    <div className='no-page flex flex-wrap flex-col items-center 
    justify-center h-half w-auto bg-gray-dark'>
        <p className='opps text-xl lg:text-3xl p-10 text-center'>
            <span className='p-5'>Opps!! You found me!! </span>
            <br />
            <span className='p-5'>But you came to the wrong place. </span>
            <br />
            <span className='p-5'>Please go back to Home page safely!!</span>
        </p>
    </div>
  )
}
