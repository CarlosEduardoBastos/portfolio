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
      <Header />
      <div className="lottie-animation">
        <div className="campo_texto">
          <h1>Texto</h1>
          <p>
            orem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. 
            Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, 
            quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos.
            Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição
          </p>
        </div>
        <div className="lottie-config">
          <Lottie options={defaultOptions} height={400} width={400}/>
        </div>
      </div>
    </>
  );
}

export default App;
