import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
