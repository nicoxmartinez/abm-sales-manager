import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./screens/Home";
import Almacen from "./screens/Almacen";
import ECommerce from "./screens/ECommerce";
import Financiacion from "./screens/Financiacion";
import Local from "./screens/Local";
import MedioDePago from "./screens/MedioDePago";
import PuntoDeVenta from "./screens/PuntoDeVenta";

function App() {

  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/almacen" element={<Almacen />} />
              <Route path="/ecommerce" element={<ECommerce />} />
              <Route path="/financiacion" element={<Financiacion />} />
              <Route path="/local" element={<Local />} />
              <Route path="/medio-de-pago" element={<MedioDePago />} />
              <Route path="/punto-de-venta" element={<PuntoDeVenta />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
