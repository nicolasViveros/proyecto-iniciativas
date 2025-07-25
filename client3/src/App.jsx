import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import FileUpload from "./pages/Form1";
import FormWizard from "./pages/FormStepByStep";
import FichasPage from "./pages/FichasPage";
import FichaPage from "./pages/FichaPage";
import EditFichaPage from "./pages/EditFichaPage";
import IniciativasHomePage from "./pages/IniciativasHomePage";
import IniciativaPage from "./pages/IniciativaPage";

import ProtectedRoute from "./ProtectedRoute";
import { FichaProvider } from "./context/FichasContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import "flag-icons/css/flag-icons.min.css";


export function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <FichaProvider>
          <BrowserRouter>
            <NavBar />
            <main className=" mx-auto px-1 ">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/nueva-ficha" element={<FormWizard />} />
                <Route path="/iniciativas" element={<IniciativasHomePage />} />
                <Route path="/iniciativaa" element={<IniciativaPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/fichas" element={<FichasPage />} />
                  <Route path="/fichas/:id" element={<FichasPage />} />
                  <Route path="/ficha/:id" element={<FichaPage />} />
                  <Route path="/ficha/:id/editar" element={<EditFichaPage />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </FichaProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
