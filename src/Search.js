import React from 'react'

const Search = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor='searchItems'>Search Items</label>
        <input 
            type='text'
            role='searchbox' 
            placeholder='Search Items'
            id='searchItems'
            value={search}
            onChange={(e)=> {setSearch(e.target.value)}}
        />
    </form>
  )
}

export default Search