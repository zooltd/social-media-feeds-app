import React from 'react'
import { Circles } from 'react-loader-spinner'

interface SpinnerProps {
  msg: string
}

const Spinner: React.FC<SpinnerProps> = ({ msg }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles
        height={50}
        width={200}
        color="#00BFFF"
        wrapperClass="m-5"
      />
      <p className="text-lg text-center px-2">{msg}</p>
    </div>
  )
}

export default Spinner
