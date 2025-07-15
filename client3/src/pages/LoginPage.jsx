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
    if (isAuthenticated) navigate('/fichas');
},[isAuthenticated]); 

  return (

    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10  rounded-md">

        {
          singinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))
        }

        <h1 className="text-2xl font-bold">Accede a tu cuenta</h1>
        <form onSubmit={onSubmit}>
          <p>
            <input type="email" {...register('email', { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
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
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
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
          className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md my-2">
            Ingresa
          </button>
        </form>

      
      </div>
    </div>

  )
}

export default LoginPage