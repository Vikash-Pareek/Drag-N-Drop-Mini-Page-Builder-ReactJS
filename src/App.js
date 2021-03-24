import React, { useState } from "react";
import Elements from './components/Elements.js';
import ModalBox from './components/ModalBox.js';

function App() {

  const drop = event => {
    const element_id = event.dataTransfer.getData("element_id");
    const element = document.getElementById(element_id).cloneNode(true);

    element.style.backgroundColor = "#F3F3F3";
    element.style.height = "auto";
    element.style.padding = "0 8% 0 1%";
    element.style.position = "absolute";

    event.target.appendChild(element);
  }

  const dragOver = event => {
    event.preventDefault();
  }

  const [showModalBox, setShowModalBox] = useState(false);


  return (
    <div className="flexBox" onDrop={() => setShowModalBox(true)}>

      <div id="activity-area" className="blank-area" onDragOver={dragOver} onDrop={drop}></div>

      {showModalBox ? <ModalBox id="modal-box" /> : null}

      <div id="board-1" className="elements-board">

        <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>BLOCKS</h3>

        <Elements id="element_id" className="element" draggable="true">
          <p>Label</p>
        </Elements>

        <Elements id="element_id" className="element" draggable="true">
          <p>Text Field</p>
        </Elements>

        <Elements id="element_id" className="element" draggable="true">
          <p>Button</p>
        </Elements>

      </div>

    </div>
  );
}

export default App;
