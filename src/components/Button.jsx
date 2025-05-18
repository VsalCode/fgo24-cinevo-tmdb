import React from 'react'

const Button = ({style, ...props}) => {
  const baseStyle = `md:px-4 md:py-2 px-2 rounded-full font-bold cursor-pointer`
  return (
    <button className={[baseStyle, style].join(" ")} {...props} >{props.children}</button>
  )
}

export default Button
