import React, { useRef, useState } from 'react'
import welcomeVideo from '../assets/welcome.mp4'
import logo from '../assets/logo.svg'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Landing: React.FC = () => {
  const [registered, setRegistered] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          ref={videoRef}
          src={welcomeVideo}
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
          onCanPlay={() => {
            (videoRef.current != null) && (videoRef.current.playbackRate = 0.1)
          }}
        />

        <div
          className="absolute flex flex-col justify-center items-center
                    top-0 right-0 left-0 bottom-0
                    bg-black bg-opacity-50">
          <div className="p-5">
            <img src={logo} width="500px" alt="logo"/>
          </div>

          {
            registered ? <LoginForm/> : <SignupForm/>
          }

          <div className="mt-4 flex flex-row items-center justify-between w-80">
            <span className="border-b w-1/5 md:w-1/4"></span>
            {
              registered
                ? (
                  <button className="text-xs text-slate-50 uppercase font-semibold"
                          onClick={() => setRegistered(!registered)}>or sign up</button>
                  )
                : (
                  <button className="text-xs text-slate-50 uppercase font-semibold"
                          onClick={() => setRegistered(!registered)}>or login</button>
                  )
            }
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landing
