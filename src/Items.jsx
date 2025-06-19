import SingleItem from './SingleItem'

const Items = ({ items, deleteItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} deleteItem={deleteItem} />
      })}
    </div>
  )
}
export default Items
