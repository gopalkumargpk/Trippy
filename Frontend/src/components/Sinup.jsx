import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle successful sign up and redirect
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-md shadow-md relative">
      <button 
        onClick={() => navigate('/')}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        aria-label="Close"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("name", { required: "Name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {errors.name && (
            <span id="name-error" className='text-sm text-red-500'>
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("email", { required: "Email is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <span id="email-error" className='text-sm text-red-500'>
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby="password-error"
          />
          {errors.password && (
            <span id="password-error" className='text-sm text-red-500'>
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Have an account?{' '}
          <Link to="/login" className="text-indigo-500 hover:text-indigo-700 font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
