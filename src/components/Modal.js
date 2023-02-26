import React from 'react'
import { createPortal } from "react-dom"
import './Modal.css'
// NOTE this modal works almost identically with or without createPortal. createPortal just hides the html when the modal is not shown
const Modal = ({children, handleClose}) => {
  return ( createPortal((

    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
      ), document.body)
  )
}

export default Modal
