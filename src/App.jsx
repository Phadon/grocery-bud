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
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} />
    </section>
  )
}

export default App
