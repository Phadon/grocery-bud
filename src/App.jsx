import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    setItems([...items, newItem])
  }
  const deleteItem = (toDelete) => {
    setItems(items.filter((item) => item !== toDelete))
    console.log(items)
  }

  const toggleItemState = (isComplete, id) => {
    setItems(
      items.filter((item) => {
        if (item.id === id) {
          item.completed = !isComplete
        }
        return item
      })
    )
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items
        items={items}
        deleteItem={deleteItem}
        toggleItemState={toggleItemState}
      />
    </section>
  )
}

export default App
