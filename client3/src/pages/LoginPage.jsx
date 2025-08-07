import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useDebugValue, useEffect } from "react";


function LoginPage() {

  const { register, handleSubmit, formState: { errors }
  } = useForm();
  const { singin, errors: singinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    singin(data);
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/menu');
},[isAuthenticated]); 

  return (

    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className=" max-w-md w-full p-10  rounded-md">
        {
          singinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))
        }
        <h1 className="text-3xl text-center font-bold mb-4">Accede a tu cuenta</h1>
        <form onSubmit={onSubmit}>
          <p>
            <input type="email" {...register('email', { required: true })}
              className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
              placeholder="email" />
          </p>
          {
            errors.email && (
              <p className="text-red-500">
                Email is required
              </p>
            )
          }
          <p>
            <input type="password" {...register('password', { required: true })}
              className="w-full border border-gray-300  px-4 py-2 rounded-md my-2 input-focused"
              placeholder="password" />
          </p>
          {
            errors.password && (
              <p className="text-red-500">
                Password is required
              </p>
            )
          }
          <button type="submit"
          className="bg-[#5d5593] text-white px-4 py-2 rounded hover:bg-[#a49fc4]">
            Ingresa
          </button>
        </form>
      </div>
    </div>

  )
}

export default LoginPage