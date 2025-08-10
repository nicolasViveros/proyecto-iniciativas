import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FileUpload from "./pages/Form1";
import FormWizard from "./pages/FormStepByStep";
import FichasPage from "./pages/FichasPage";
import FichaPage from "./pages/FichaPage";
import EditFichaPage from "./pages/EditFichaPage";
import IniciativasHomePage from "./pages/IniciativasHomePage";
import IniciativaPage from "./pages/IniciativaPage";
import EditIniciativaPage from "./pages/EditIniciativaPage";
import IniciativasPage from "./pages/IniciativasPage";
import IniciativaFormPage from "./pages/IniciativaFormPage";

import ProtectedRoute from "./ProtectedRoute";
import { FichaProvider } from "./context/FichasContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import "flag-icons/css/flag-icons.min.css";
import MenuIntranet from "./pages/MenuIntranet";
import { IniciativaProvider } from "./context/IniciativasContext";


export function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <FichaProvider>
          <IniciativaProvider>
            <BrowserRouter>
              <NavBar />
              <main className=" mx-auto px-1 ">

                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/nueva-ficha" element={<FormWizard />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path="/iniciativasHome" element={<IniciativasHomePage />} />
                    <Route path="/iniciativa/:id" element={<IniciativaPage />} />
                    <Route path="/iniciativas" element={<IniciativasPage />} />
                    <Route path="/nueva-iniciativa" element={<IniciativaFormPage />} />
                    <Route path="/iniciativa/:id/editar" element={<EditIniciativaPage />} />
                    <Route path="/menu" element={<MenuIntranet />} />
                    <Route path="/fichas" element={<FichasPage />} />
                    <Route path="/fichas/:id" element={<FichasPage />} />
                    <Route path="/ficha/:id" element={<FichaPage />} />
                    <Route path="/ficha/:id/editar" element={<EditFichaPage />} />
                    <Route path="/iniciativasPorPais/:pais" element={<IniciativasPage />} />
                    <Route path="/iniciativasPorCiudad/:ciudad" element={<IniciativasPage />} />
                  </Route>
                </Routes>

              </main>
              <Footer />
            </BrowserRouter>
          </IniciativaProvider>
        </FichaProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
