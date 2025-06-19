import SingleItem from './SingleItem'

const Items = ({ items, deleteItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        )
      })}
    </div>
  )
}
export default Items
