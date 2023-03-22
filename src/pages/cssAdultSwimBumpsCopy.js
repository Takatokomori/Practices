import React from 'react'
import "../styles/cssAdultSwimBumpsCopy.css"

export default function CssAdultSwimBumpsCopy() {
    var dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
        ];
        
        var now = new Date();
        var day = now.getDay();
        var dayName = dayNames[day];
        
  return (
    <div className='program'>
        <h1 className='text-white text-xl'>
            <span className='text-blue'>{dayName}</span> Bump Lineup
        </h1>
        <p className='text-white'>
            Lineup Reminders in <span className='text-pink'>Takachan's PC</span>
        </p>
        <p className='text-white'>
            His Trip was almost <span className='text-gray'>Cancelled</span>
        </p>
        <p className='text-white'>
            He started watching <span className='text-green'>Cartoon</span>
        </p>
    </div>
  )
}
