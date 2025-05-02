import React from "react";

interface TrialButtonProps {
  onClick?: () => void;
  className?: string;
}

const TrialButton: React.FC<TrialButtonProps> = ({ onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-indigo-500 px-4 py-2 rounded text-white font-medium ${className}`}
    >
      Start free trial
    </button>
  );
};

export default TrialButton;
