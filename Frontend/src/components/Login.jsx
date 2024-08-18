import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/'); // Redirect to home page after form submission
  };

  const closeModal = () => {
    navigate("/"); // Redirect to home page when close button is clicked
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Login!</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className='space-y-2'>
              <input 
                type='email' 
                placeholder='Enter your email' 
                className='w-full max-w-xs px-3 py-2 border rounded-md outline-none'
                {...register("email", { required: "Email is required" })}
              />
              <br/>
              {errors.email && <span className='text-red-500'>
              {errors.email.message}</span>}
            </div>
            <div className='space-y-2'>
              <input 
                type='password' 
                placeholder='Enter your password' 
                className='w-full max-w-xs px-3 py-2 border rounded-md outline-none'
                {...register("password", 
              
                
                { required: "Password is required" })}
              />
              <br/>
              {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <div className='flex justify-center mt-4'>
              <button 
                type="submit"
                className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>
                Login
              </button>
            </div>
          </form>
          <div className='flex justify-center mt-4'>
            <p>
              Not registered? <span className='underline text-blue-500 cursor-pointer'>
                <Link to={'/signup'}>Signup</Link>
              </span>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
