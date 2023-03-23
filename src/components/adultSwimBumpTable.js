import words from 'random-words'
import React from 'react'

export default function AdultSwimBumpTable() {
    const date = new Date();
    const showHour = date.getHours();
    var showMin = "00"
    var showTime = showHour + ":" + showMin;
    const showLineup = words({exactly:5, minLength:5, 
        wordsPerString:2, formatter: (word, index)=> {
        return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word;
        }
    });

  return (
    <div className='flex flex-wrap flex-col items-start
                    justify-center content-start lineups'>
        {showLineup.map((lineup, i) =>(
            <div key={i} className='flex flex-wrap flex-row items-start
            justify-center content-start lineup'>
                <h1 className='text-white text-2xl pr-1'>{showTime}</h1>
                <h1 className='text-white text-2xl' >{lineup}</h1>
            </div>
        ))}
    </div>
  )
}
