import React from 'react'
import './PopUp.css'
import { Close } from '../../images/index'

const PopUp = (props) => {
  return (props.trigger) ? (
    <div className='popUp'>
      <div className="popUp-inner">
        <img src={Close} alt="Close" onClick={() => {props.setTrigger(false) }} width={30} />
        {props.children}
      </div>
    </div>
  ) : "";
}

export default PopUp