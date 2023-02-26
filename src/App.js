import './App.css';
import React, {useState} from 'react'
import Modal from "./components/Modal.js";
function App() {
  const [showModal, setShowModal] = useState(true)

  const handleClose = () => {
    if(showModal){
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClose}>Open Modal</button>
      {/* NOTE a comp can be given props through a self closing comp or children as seen below without a self closing end */}
      {showModal && 
      <Modal
      handleClose={handleClose}
      >
      <h2>Title</h2>
        <p>body</p>
      </Modal>}
        </header>
    </div>
  );
}

export default App;
