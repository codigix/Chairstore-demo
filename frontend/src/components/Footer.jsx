const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopEase</h3>
            <p className="text-sm text-gray-600">
              Your one-stop shop for all your shopping needs.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-sm text-gray-600 hover:text-primary">
                  All Products
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm text-gray-600 hover:text-primary">
                  Featured Items
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm text-gray-600 hover:text-primary">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="/profile" className="text-sm text-gray-600 hover:text-primary">
                  Your Account
                </a>
              </li>
              <li>
                <a href="/orders" className="text-sm text-gray-600 hover:text-primary">
                  Order History
                </a>
              </li>
              <li>
                <a href="/register" className="text-sm text-gray-600 hover:text-primary">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600 mb-2">
              Email: support@shopease.com
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Phone: +1 (123) 456-7890
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <span className="sr-only">Facebook</span>
                {/* Facebook SVG */}
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <span className="sr-only">Instagram</span>
                {/* Instagram SVG */}
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <span className="sr-only">Twitter</span>
                {/* Twitter SVG */}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2023 ShopEase, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
