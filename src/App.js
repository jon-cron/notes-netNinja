import './App.css';
import React, {useState} from 'react'
import Modal from "./components/Modal.js";
import NewEventForm from "./components/NewEventForm.js";
function App() {
  const [showModal, setShowModal] = useState(true)
  const [events, setEvents] = useState([])

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
        <button onClick={handleClose}>Add New Event</button>
      {/* NOTE a comp can be given props through a self closing comp or children as seen below without a self closing end */}
      {showModal && 
      <Modal
      handleClose={handleClose}
      >
        <NewEventForm/>
      </Modal>}
        </header>
    </div>
  );
}

export default App;
