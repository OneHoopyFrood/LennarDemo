"use client";

import React from "react";

interface TrialButtonProps {
  email?: string;
  className?: string;
}

// Normally I wouldn't include the server communication in the component file,
// but for the sake of this example and speed of development, I'm doing it here.
// In a real-world scenario, you would separate concerns and have a dedicated
// service or API file to handle server communication.

const TrialButton: React.FC<TrialButtonProps> = ({ email, className }) => {
  const handleClick = async () => {
    if (!email) {
      dispatchEvent(new Event("email:focus"));
      return;
    }

    if (email == null || email === "") {
      alert("Please enter a valid email address.");
      return;
    }

    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        mutation AddEmail($email: String!) {
          addEmail(email: $email) {
            success
            message
          }
        }
      `,
        variables: { email },
      }),
    });
    const data = await response.json();
    if (response.ok) {
      if (data.data.addEmail.success) {
        alert("Email added successfully!");
      } else {
        alert(`Error: ${data.data.addEmail.message}`);
      }
    } else {
      alert(`Error: ${data.message}`);
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={`bg-indigo-500 px-4 py-2 rounded text-white font-medium hover:bg-indigo-600 cursor-pointer ${className}`}
    >
      Start free trial
    </button>
  );
};

export default TrialButton;
