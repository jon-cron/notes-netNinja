import logo from './logo.svg';
import './App.css';
import React from 'react'
import Modal from "./components/Modal.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* NOTE a comp can be given props through a self closing comp or children as seen below without a self closing end */}
      <Modal>
      <h2>Title</h2>
        <p>body</p>
      </Modal>
    </div>
  );
}

export default App;
