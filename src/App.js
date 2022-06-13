import { BrowserRouter,Route, Routes } from "react-router-dom"
import NotFoundPage from './NotFoundPage'
import Navbar from './Components/Navbar'
import Sugerencias from "./pages/Sugerencias"
import Codigos from "./pages/Codigos"
import Cotizaciones from "./pages/Cotizaciones"
import AboutPage from "./pages/AboutPage"
import Inicio from "./pages/Inicio"
import "./pages/App.css"
import "./pages/ws"
export default function App() {

 return (
     
<BrowserRouter>
<Navbar />
 <div className="pages"> 
<Routes>
 <Route path="/" element={<Inicio />} />
<Route path="/AboutPage" element={<AboutPage />} />
<Route path="/Cotizaciones" element={<Cotizaciones />} />
<Route path="/Codigos" element={<Codigos />} />
<Route path="/Sugerencias" element={<Sugerencias />} />
<Route path="*" element={<NotFoundPage />} />
</Routes>

</div>
</BrowserRouter> 


    )   
}

