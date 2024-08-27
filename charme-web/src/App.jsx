import { useEffect, useRef } from "react"
import video from "./assets/video.mp4"

function App() {
  const videoRef = useRef()

  // useEffect(()=>{
  //   videoRef.current?.play()
  // },[videoRef.current])
  return (
      <video autoPlay loop playsInline muted ref={videoRef}>
        <source  src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  )
}

export default App
