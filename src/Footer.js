import React from 'react'

function Footer({ length }) {
    // const today = new Date();
  return (
    <footer>
       <p> {length} List Items</p>
        {/* <p> Copyright &copy; {today.getFullYear()} </p> */}
    </footer>
  )
}

export default Footer