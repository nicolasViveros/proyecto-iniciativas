import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import FileUpload from "./pages/Form1";
import FormWizard from "./pages/FormStepByStep";
import FichasPage from "./pages/FichasPage";
import FichaPage from "./pages/FichaPage";

import ProtectedRoute from "./ProtectedRoute";
import { FichaProvider } from "./context/FichasContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export function App() {
  return (
    <AuthProvider>
      <FichaProvider>
        <BrowserRouter>
          <NavBar />
          <main className=" mx-auto px-1 ">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/nueva-ficha' element={<FormWizard />} />


              <Route element={<ProtectedRoute />}>
              <Route path='/fichas' element={<FichasPage />} />
              <Route path='/fichas/:id' element={<FichasPage />} />
              <Route path='/ficha/:id' element={<FichaPage />} />

              </Route>
            </Routes>
          </main>
          <Footer />

        </BrowserRouter>
      </FichaProvider> 
    </AuthProvider>
  );
};

export default App