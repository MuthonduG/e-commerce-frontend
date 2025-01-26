import React from 'react';
import { ImCancelCircle } from "react-icons/im";

type AlertProps = {
  type: "info" | "success" | "warning" | "error";
  message: string;
  style?: string;
  onClose: () => void;
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose, style }) => {
  const alertStyles = {
    info: "bg-blue-50 text-blue-800 border-blue-400",
    success: "bg-green-50 text-green-800 border-green-400",
    warning: "bg-red-300 text-red-600 border-yellow-400",
    error: "bg-red-50 text-red-800 border-red-400",
  };

  return (
    <div
      className={`flex items-center p-4 border rounded-lg shadow-md ${style} ${alertStyles[type]}`}
      role="alert"
    >
      <span className="flex-grow">{message}</span>
      <button onClick={onClose} className="text-xl">
        <ImCancelCircle />
      </button>
    </div>
  );
};

export default Alert;