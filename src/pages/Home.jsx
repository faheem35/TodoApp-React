import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'

const Home = () => {

  const [addResponseFromHome,setAddResponseFromHome]=useState("")
  return (
    <>
  <h1 className='mb-5 mt-3'>Todo App</h1>
    <View addResponseFromHome={addResponseFromHome}/>
   <div className='position-fixed end-0 bottom-0 p-3'> <Add setAddResponseFromHome={setAddResponseFromHome}/></div>
    </>
  )
}

export default Home