import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import ScrollToTop from "./ScrollTop";
import './App.css'
import './index.css'
import { lazy, Suspense } from "react";
const ErrorPage = lazy(() => import('./page/Error'))

function App() {
  return (
      <div>
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="/" element={<Home/>}></Route>
              <Route path="*" element={
                <Suspense fallback={<><div className="text-white">Loading</div></>}>
                  <ErrorPage/>
                </Suspense>
              }></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
