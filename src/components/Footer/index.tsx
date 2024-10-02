import Icons from "../Icons/index";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left"> {/* Text centered on small screens */}
          <div>
            <h3 className="font-bold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Product</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Tomothy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Eleanor Edwards</a></li>
              <li><a href="#" className="hover:text-gray-300">Ted Robertson</a></li>
              <li><a href="#" className="hover:text-gray-300">Annette Russell</a></li>
              <li><a href="#" className="hover:text-gray-300">Jennie Mckinney</a></li>
              <li><a href="#" className="hover:text-gray-300">Gloria Richards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Jane Black</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Philip Jones</a></li>
              <li><a href="#" className="hover:text-gray-300">Product</a></li>
              <li><a href="#" className="hover:text-gray-300">Colleen Russell</a></li>
              <li><a href="#" className="hover:text-gray-300">Marvin Hawkins</a></li>
              <li><a href="#" className="hover:text-gray-300">Bruce Simmmons</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start"> {/* Center on small screens, left-align on larger */}
            <p>© 2024 Company. All rights reserved.</p>
            <p>(239) 555-0108</p>
            <div className="flex space-x-4 mt-4">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
