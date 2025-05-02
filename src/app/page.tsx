import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Text */}
      <div>
        <h1 className="text-4xl text-left font-bold mb-4">
          A better way to <br />
          <span className="text-indigo-400">ship web apps</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 text-black placeholder-gray-500 rounded border border-gray-300 bg-white"
        />
        <button
          type="submit"
          className="w-full bg-indigo-500 px-4 py-2 rounded text-white font-medium"
        >
          Start free trial
        </button>
      </form>
      <p className="text-gray-300 text-sm mt-4">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our &nbsp;
        <a href="#terms" className="font-bold text-white underline">
          terms of service
        </a>
        .
      </p>
    </>
  );
}
