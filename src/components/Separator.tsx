import React from 'react'

interface SeparatorProps {
  msg: string
}

const Separator: React.FC<SeparatorProps> = ({ msg }) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">{msg}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  )
}

export default Separator
