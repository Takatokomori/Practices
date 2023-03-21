import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'

export default function Layout({children}) {
  return (
    <>
     <Helmet>
       <title>Home | Practices</title>
     </Helmet>
     <Header />
     <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>{children}</main>
    </>
  )
}
