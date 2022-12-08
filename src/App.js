import "./App.css";
import { Home } from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>404 page not found</h1>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
