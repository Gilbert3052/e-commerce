import React from 'react'
import "./styles/InputSearch.css"

const InputSearch = ({input, setInput}) => {

    const handleInput = e => {
        setInput(e.target.value)
    }

  return (
    <input className='InputSearch' placeholder='Search Product' value={input} onChange={handleInput} type="text" />
  )
}

export default InputSearch