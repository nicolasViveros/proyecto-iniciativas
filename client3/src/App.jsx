import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProjectForm from "./pages/Form1";
import FormWizard from "./pages/FormStepByStep";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <NavBar />
          <main className=" mx-auto px-1 ">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/new-task' element={<ProjectForm />} />
              <Route path='/nueva-ficha' element={<FormWizard />} />
              <Route path='/add-task' element={<TaskFormPage />} />
              <Route path='/tasks' element={<TasksPage />} />


              <Route element={<ProtectedRoute />}>
                <Route path='/tasks/:id' element={<TaskFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
          <Footer />

        </BrowserRouter>
      </TaskProvider> 
    </AuthProvider>
  );
};

export default App