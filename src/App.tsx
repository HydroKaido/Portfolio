import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Project from './page/Project';
import Error from './page/Error';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
