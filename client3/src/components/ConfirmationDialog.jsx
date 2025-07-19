import React from "react";

const ConfirmationDialog = ({ isOpen, onConfirm, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-sm">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
          >
            Editar
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;