import "./App.css";
import ModalPortal from "./ModalPortal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button
        className="open_btn"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        OPEN MODAL
      </button>
      <ModalPortal
        open={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      />

      <h1>Background Content: Demo modal using React Hooks and Portals.</h1>
    </div>
  );
}

export default App;
