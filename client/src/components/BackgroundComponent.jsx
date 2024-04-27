import React from 'react'

const BackgroundComponent = ({children}) => {
  return (
    <div className=' w-screen  h-screen  bg-green-950 p-10'>
      {children}
    </div>
  )
}

export default BackgroundComponent