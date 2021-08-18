import './App.css';
import Modal from "./Modal/Modal";
import React, { useState } from "react"

function App() {
 const [show, setShow] = useState(false);


  return (
    <div className="app">
      <button onClick={() => setShow(true) }>Show Modal</button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
