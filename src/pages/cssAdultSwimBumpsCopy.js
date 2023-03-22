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
    <div className='flex flex-wrap flex-col items-center justify-center
                    h-half w-auto bg-gray-dark program'>
        <h1 className='text-white text-3xl'>
            <span className='text-blue'>{dayName}</span> Bump Lineup
        </h1>
        <p className='text-white text-lg'>
            Lineup Reminders in <span className='text-pink'>Takachan's PC</span>
        </p>
        <p className='text-white text-lg'>
            He started watching <span className='text-green'>Cartoon</span>
        </p>
        <p className='text-white text-lg'>
            He hates <span className='text-gray'>Spending Money</span>
        </p>
    </div>
  )
}
