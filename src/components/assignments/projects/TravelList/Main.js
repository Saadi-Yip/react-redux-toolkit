import './index.css'
import React, {useState} from 'react'
import Logo from './logo'
import Form from './form' 
import Stats from './stats'
import Packing from './packing'

const Travel = () => {
  const [item, setItem] = useState([]);
  const handleChangeItems = (newItem) => {
    setItem((item) => [...item, newItem]);
  }
  const handleDeleteItems = (id) => {
    setItem(item => item.filter(i => i.id !== id))
  }
  const handleToggleItem = (id) => {
    setItem(item => item.map(i =>i.id === id ? {...i, packed: !i.packed}:i));
  }
  const handleClearItems = () => {
    setItem([]);
  }
  return (
    <>
        <Logo/>
        <Form handleChangeItems = {handleChangeItems}/>
        <Packing item = {item} handleDeleteItems = {handleDeleteItems} handleToggleItem = {handleToggleItem} onClear = {handleClearItems}/>
        <Stats item = {item}/>
    </>
  )
}

export default Travel