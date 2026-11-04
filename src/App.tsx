import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@components/ErrorBoundary";
import MainLayout from "@layouts/MainLayout";
import Home from "@screens/HomeView";
import Almacen from "@screens/AlmacenView";
import ECommerce from "@screens/ECommerceView";
import Financiacion from "@screens/FinanciacionView";
import Local from "@screens/LocalView";
import MedioDePago from "@screens/MedioDePagoView";
import PuntoDeVenta from "@screens/PuntoDeVentaView";

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
      </ErrorBoundary >
    </>
  )
}

export default App
