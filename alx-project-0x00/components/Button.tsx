import React from 'react'

interface ButtonProps {
  title: string
  styles: string
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-6 py-3 m-4 ${styles} hover:bg-blue-600`}
    >
      {title}
    </button>
  )
}

export default Button
