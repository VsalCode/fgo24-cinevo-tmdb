import React from 'react'

const Button = (props) => {
  const baseStyle = `px-4 py-2 rounded-full font-bold cursor-pointer`
  return (
    <button className={[baseStyle, props.style].join(" ") } >{props.children}</button>
  )
}

export default Button
