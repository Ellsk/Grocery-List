import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ( { newItem, setNewItems, handleSubmit } ) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e)=> {setNewItems(e.target.value)}}
        />
        <button
            aria-label='Add Item'
            type='submit'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem