import React from 'react'

const Stats = ({item}) => {
  const numOfItems = item.length;
  const packedItems = item.filter(i => i.packed==true).length;
  const percent = numOfItems && Math.round((packedItems/numOfItems) * 100);
  const quantity = item.map(i => Number(i.quantity)); 
  const total = quantity.reduce((total, quantity) => total + quantity, 0); 
  return (
    <footer className='stats'>
       {percent == 100 ?<em>You have packed all {packedItems} items with total {total} quantity</em>
       :  
       <em>You have {numOfItems} items on your list, and you already packed {packedItems} ({percent} %)</em>} 
       
    </footer>
  )
}

export default Stats