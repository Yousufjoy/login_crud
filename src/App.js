import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
