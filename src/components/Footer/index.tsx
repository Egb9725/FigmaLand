const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tenancy</h3>
              <ul>
                <li>Legal notices</li>
                <li>Privacy</li>
                <li>Refund policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul>
                <li>Contact us</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>© 2024 Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  