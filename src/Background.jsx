import React from 'react'
import background from '../src/assets/img/image.png'
const Background = ({children}) => {
  return (
   <>
    <div className='relative min-h-screen '>
        <section 
        className='absolute fixed inset-0    bg-center'
        style={{backgroundImage: `url(${background})`}}
        />

        <div className='absolute inset-0 bg-black/40'  />
         <div className='relative z-10'>
        {children}
      </div>

    </div>
   </>
  )
}

export default Background