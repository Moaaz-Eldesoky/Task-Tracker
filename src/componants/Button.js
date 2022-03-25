import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='btn' style={{backgroundColor:props.color}}>
        {props.lable}
    </button>
  )
}
Button.defaultProps ={
    color:"steelblue",
}
Button.propTypes ={
    color:PropTypes.string,
}
export default Button