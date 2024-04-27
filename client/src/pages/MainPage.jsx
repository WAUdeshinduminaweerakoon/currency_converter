import React from 'react'
import BackgroundComponent from '../components/BackgroundComponent'
import ConvertFormComponents from '../components/ConvertFormComponents'

const MainPage = () => {
  return (
    <BackgroundComponent>
        <div>
            <h1 className=' lg:mx-28 text-zinc-50 text-5xl text-center justify-center'>Convert Your Currencies Today</h1>
            <p className=' lg:mx-28 text-2xl text-zinc-300  m-6 text-center'>Welcome to "Convert Your Currencies Today"! this application allows you to easily convert currencies based on the lastest exchange rates</p>
        </div>
        <div>
            <ConvertFormComponents/>
        </div>
        
    </BackgroundComponent>
        
    
  )
}

export default MainPage