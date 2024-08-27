import { useRef } from "react";
import videoD from "./assets/desktop-new.mp4";
import videoM from "./assets/mobile-new.mp4";
import { useMediaQuery } from "react-responsive";

function App() {
  const videoRef = useRef();
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <video autoPlay loop playsInline muted ref={videoRef} className="h-full">
      <source src={isPortrait ? videoM : videoD} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default App;
