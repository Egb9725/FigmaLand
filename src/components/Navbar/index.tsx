


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="hidden md:flex space-x-6"> 
          <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
          <a href="#products" className="text-gray-700 hover:text-purple-600">Products</a>
          <a href="#pricing" className="text-gray-700 hover:text-purple-600">Pricing</a>
          <a href="#about" className="text-gray-700 hover:text-purple-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
        </div>
        <div className="text-xl font-bold text-purple-600">
            <img className="rounded-full" src="https://res.cloudinary.com/doq50mquo/image/upload/v1725440638/Rectangle_4_vtysq9.png" alt="photo" />
        </div>

        {/* Icônes de réseaux sociaux */}
        <div className="flex md:hidden"> {/* Icônes visibles sur mobile */}
          <button className="text-gray-700 focus:outline-none">
            {/* Bouton menu pour mobile */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="flex space-x-4"> 
            <a href="https://twitter.com" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;