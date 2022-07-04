import Link from 'next/link'
import React from 'react'

export default function Button({ type = 'primary', children = '', ...otherProps }) {
  const types: any = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm border border-transparent',
    secondary: 'text-gray-500 hover:text-gray-900'
  }
  
  return (
    <button {...otherProps} className={`flex items-center justify-center px-4 py-2 rounded-md text-base font-medium ${types[type]}`}>
      {children}
    </button>
  )
}
