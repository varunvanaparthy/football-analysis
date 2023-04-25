import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import DbDesign from "./pages/DbDesign.js";
import ScDesign from "./pages/ScDesign.js";
import Mappings from "./pages/Mappings.js";
import Workflows from "./pages/Workflows.js";
import Reports from "./pages/Reports.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/db-design" element={<DbDesign/>}></Route>
          <Route path="/sc-design" element={<ScDesign/>}></Route>
          <Route path="/mappings" element={<Mappings/>}></Route>
          <Route path="/workflows" element={<Workflows/>}></Route>
          <Route path="/reports" element={<Reports/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
