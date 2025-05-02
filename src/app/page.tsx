import React from "react";
import TrialButton from "./components/TrialButton";

export default function Home() {
  return (
    <>
      {/* Hero Text */}
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          A better way to <br />
          <span className="text-indigo-400">ship web apps</span>
        </h1>
        <p className="text-gray-300 mb-6 text-sm md:text-base lg:text-lg">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <form className="max-w-md md:max-w-lg lg:max-w-xl">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 text-black placeholder-gray-500 rounded border border-gray-300 bg-white"
        />
        <TrialButton className="w-full" />
      </form>
      <p className="text-gray-300 text-sm mt-4 max-w-md md:max-w-lg lg:max-w-xl">
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
