import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function WaitlistForm() {
  const [state, handleSubmit] = useForm("xjvznqaz");
  if (state.succeeded) {
      return <p className="mt-4 text-lg leading-8 text-gray-500 sm:text-center">Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <div className="relative mt-4 rounded-md shadow-sm">
        <input
          type="text"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="name@example.com"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="inline-flex justify-center rounded-xl border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition duration-200"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  )
}