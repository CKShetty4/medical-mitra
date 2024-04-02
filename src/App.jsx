import React, { useEffect,useState } from 'react'
import { Header, Info, Footer, Services } from './components'
import { WhatsappLogo } from './images'
import Defaultpop from './components/PopUp/Defaultpop'
import secureLocalStorage from "react-secure-storage";
import PreLoader from './components/Loader/PreLoader';
const App = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  return (
   <>
      {screenLoading ? (
        <>
       <PreLoader/>
       <Header /></>
      ) : (
      <>
    <Header />
    <Services />
    <Info />
    <Footer />

    {
      secureLocalStorage.getItem('user') ?
        <>
        </>
        :
        <>
          <Defaultpop />
        </>
    }

    <div className="fixed-bottom right-100 p-3" style={{ zindex: "6", left: "initial" }}>
      <a href="https://wa.me/918861619973?text=Hello, I have a question about Medical Mitra" target="_blank">
        <img src={WhatsappLogo} width="60" />
      </a>
    </div>
    </>  
      )}

  </>);
}

export default App