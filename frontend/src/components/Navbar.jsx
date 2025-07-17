import { Link } from "react-router-dom";
import { ShoppingCart, Search, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(3); // Example static cart count
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Example state
  const [user, setUser] = useState({ name: "John Doe", email: "john@example.com", isAdmin: true });

  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log("Logged out");
  };

  const handleOpenCart = () => {
    console.log("Cart opened");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            ShopEase
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 border rounded-md w-full py-2"
            />
            <Search className="w-4 h-4 absolute left-3 text-gray-400" />
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link to="/products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/orders" className="text-sm font-medium hover:text-primary">
                  Orders
                </Link>

                <div className="relative group">
                  <button className="p-2">
                    <User className="h-5 w-5" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-medium">Hello, {user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">
                        Your Profile
                      </Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm hover:bg-gray-100">
                        Your Orders
                      </Link>
                      {user.isAdmin && (
                        <Link to="/admin" className="block px-4 py-2 text-sm hover:bg-gray-100">
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium px-3 py-2 rounded hover:bg-gray-100"
              >
                Sign In
              </Link>
            )}

            <button
              className="relative border rounded-full p-2"
              onClick={handleOpenCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
