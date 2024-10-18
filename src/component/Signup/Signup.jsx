import React from 'react';
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className="relative flex items-center justify-center h-full bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">Sign Up</h2>

        {/* Sign Up Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {/* Optional Text Link */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
