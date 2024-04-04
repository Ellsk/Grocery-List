import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = () => {
  return (
    <form className='addForm'>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
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