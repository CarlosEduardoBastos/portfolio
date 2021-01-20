import React from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/lotties/43885-laptop-working.json'
import Header from './Header';


function App() {
const container = React.useRef(null)
  const defaultOptions = ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  })
  return (
    <>
      
    </>
  );
}

export default App;
