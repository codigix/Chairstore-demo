import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(true); // Simulating open/close state
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Sample Product",
      price: 25,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            className="p-2 rounded hover:bg-gray-100"
            onClick={handleCloseCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button
                onClick={handleCloseCart}
                className="border px-4 py-2 rounded hover:bg-gray-100"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y">
              {items.map((item) => (
                <li key={item.id} className="py-3 flex gap-4">
                  <div className="w-20 h-20 rounded bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {formatCurrency(item.price)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        className="border h-7 w-7 rounded hover:bg-gray-100 flex items-center justify-center"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-10 text-center">{item.quantity}</span>
                      <button
                        className="border h-7 w-7 rounded hover:bg-gray-100 flex items-center justify-center"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    className="h-7 w-7 rounded hover:bg-gray-100 flex items-center justify-center"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={handleCloseCart}
              className="block w-full text-center bg-primary text-white py-2 rounded mb-2 hover:opacity-90"
            >
              Checkout
            </Link>
            <button
              onClick={handleCloseCart}
              className="border w-full py-2 rounded hover:bg-gray-100"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
