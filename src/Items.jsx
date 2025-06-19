const Items = ({ items, deleteItem, toggleItemState }) => {
  const handleDelete = (item) => {
    deleteItem(item)
  }

  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <div className='single-item' key={item.id}>
            <input
              type='checkbox'
              onClick={() => toggleItemState(item.completed, item.id)}
            />
            <p
              style={{
                textTransform: 'capitalize',
                textDecoration: item.completed ? 'line-through' : '',
              }}
            >
              {item.name}
            </p>
            <button
              className='btn remove-btn'
              onClick={() => handleDelete(item)}
            >
              delete
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default Items
