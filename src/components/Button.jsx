import React from 'react'

const Button = ({style, ...props}) => {
  const baseStyle = `px-4 py-2 rounded-full font-bold cursor-pointer`
  return (
    <button className={[baseStyle, style].join(" ")} {...props} >{props.children}</button>
  )
}

export default Button
