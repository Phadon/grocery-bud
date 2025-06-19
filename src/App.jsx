import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list')
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'))
//   } else {
//     list = []
//   }
//   return list
// }

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')
const App = () => {
  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to the list')
  }
  const deleteItem = (toDelete) => {
    const newItems = items.filter((item) => item !== toDelete)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item deleted from the list')
  }
  const editItem = (editItemId) => {
    const newItems = items.map((item) => {
      if (item.id === editItemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} editItem={editItem} />
    </section>
  )
}

export default App
