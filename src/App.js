import { Routes, Route } from "react-router-dom";

import "./App.css";

import Class from "./components/class/class.component";
import Function from "./components/function/function.component";
import Home from "./components/home/home.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/class" Component={Class} />
        <Route path="/function" Component={Function} />
      </Routes>
    </div>
  );
}

export default App;
