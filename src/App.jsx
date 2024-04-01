import React, { useEffect } from 'react'
import { Header, Info, Footer,Services } from './components'
import { WhatsappLogo } from './images'
import Defaultpop from './components/PopUp/Defaultpop'
import  secureLocalStorage  from  "react-secure-storage";
const App = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  return <>

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
}

export default App