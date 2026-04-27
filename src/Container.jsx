import React, { useState } from 'react'
import Home from './page/Home'
import Page2 from './page/Page2'

const Container = () => {
    const [step , setStep]= useState(1)
  return (
    <div>
        {step === 1 && <Home onNext={()=>setStep(2)} />}
        {step === 2 && <Page2 />}

    </div>
  )
}

export default Container