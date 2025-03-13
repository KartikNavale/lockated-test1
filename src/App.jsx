import { BrowserRouter, Route, Routes } from "react-router-dom"
import Members from "./pages/members"
import LockatedReact from "./pages/lockated-react"
import NewPurchaseOrder from "./pages/new-purchase-order"
import "./mor.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/lockated-react" element={<LockatedReact />} />
        <Route path="/new-purchase-order" element={<NewPurchaseOrder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App