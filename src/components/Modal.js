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
    // NOTE this document.body is us specifying where we would like the HTML injected
      ), document.body)
  )
}

export default Modal
