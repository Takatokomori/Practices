import React from 'react'
import IndexTable from '../components/indexTable';

export default function Index() {
  return (
    <div className='flex flex-row flex-wrap
    gap-10'>
        <IndexTable category={"CSS"} />
        <IndexTable category={"JS"} />
    </div>
  )
}
