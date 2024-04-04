import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ( { newItem, setNewItems, handleSubmit } ) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
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
            onClick={()=> inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem