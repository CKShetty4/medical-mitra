import React,{useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { PaymentGatewayImage } from '../../images/index'
import secureLocalStorage from 'react-secure-storage'
import { useNavigate } from 'react-router-dom'

const PaymentGateway = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (secureLocalStorage.getItem('type') ===null) {
      navigate('/Login');
    }
  }, [])
  return (
    
    <div className="wrapper"><NavBar />
      <br /><br /><br /><br />
      <div >
        <img src={PaymentGatewayImage} style={{
          display: 'flex', justifyContent: 'left', padding: '0 12%', width: '100%', height: '70vh'
        }} /></div>
    </div>
  )
}

export default PaymentGateway