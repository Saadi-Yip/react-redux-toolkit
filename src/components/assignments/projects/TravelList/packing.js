import React from 'react'
const data = [
  { id: 1, name: 'passport', quantity: 2, packed: false },
  { id: 2, name: 'charger', quantity: 25, packed: true },
]
const Packing = () => {

  return (
    <div className='list'>
      <ul>
        {
          data.map((item, index) => {
            return <li>
              <span style={{ textDecoration: `${item.packed ? 'line-through' : ''}` }}>{item?.quantity} {item?.name}</span>
              <button>❎</button>
            </li>
          })
        }

      </ul>
    </div>
  )
}

export default Packing