import './index.css'
import React from 'react'
import Logo from './logo'
import Form from './form' 
import Stats from './stats'
import Packing from './packing'

const Travel = () => {
  return (
    <>
        <Logo/>
        <Form/>
        <Packing/>
        <Stats/>
    </>
  )
}

export default Travel