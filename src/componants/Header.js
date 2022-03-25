import React from 'react'
import Button from './Button'
const Header = (props) => {
    const play = ()=>{
        console.log('clicked')
    }  
  return (
      <header className='header'><h1>{props.title}</h1>
        <Button lable='add' onClick={play} color="#232368"/>
      </header>
  )
}

export default Header