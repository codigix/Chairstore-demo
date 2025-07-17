import { useState } from "react";

export function AlertDialog({ triggerText, title, description, onConfirm }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm?.();
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded bg-primary text-white hover:opacity-90"
      >
        {triggerText || "Open Dialog"}
      </button>

      {/* Overlay & Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-center">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-primary text-white rounded hover:opacity-90"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
