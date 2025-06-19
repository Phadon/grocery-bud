import { useState } from 'react'

const SingleItem = ({ item, deleteItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button className='btn remove-btn' onClick={() => deleteItem(item)}>
        delete
      </button>
    </div>
  )
}
export default SingleItem
