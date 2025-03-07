import { BrowserRouter, Route, Routes } from "react-router-dom"
import Members from "./pages/members"
import LockatedReact from "./pages/lockated-react"
import "./mor.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/lockated-react" element={<LockatedReact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App