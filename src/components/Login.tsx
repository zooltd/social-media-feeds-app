import React, {useRef,} from 'react';
import logo from '../assets/logo.svg'
import welcomeVideo from '../assets/welcome.mp4'
import LoginForm from "./LoginForm"

const Login: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className=" relative w-full h-full">
                <video
                    ref={videoRef}
                    src={welcomeVideo}
                    typeof="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                    onCanPlay={() => {
                        videoRef.current && (videoRef.current.playbackRate = 0.1);
                    }}
                />

                <div
                    className="absolute flex flex-col justify-center items-center
                    top-0 right-0 left-0 bottom-0
                    bg-black bg-opacity-50">
                    <div className="p-5">
                        <img src={logo} width="500px" alt="logo"/>
                    </div>

                    <LoginForm/>

                </div>
            </div>
        </div>
    );
};

export default Login;
