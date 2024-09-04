import React from 'react';

const Header = () => {
  return (
   


    
    <div className="absolute top-[-0.2rem] right-[0rem] flex w-[111.1rem] h-[0.1rem] box-sizing-border" style={{ backgroundImage: "url('https://res.cloudinary.com/doq50mquo/image/upload/v1725440643/Rectangle_9_y4ydtr.png')" }}>
        
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Navigation */}
        
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    <a href="#home" className="text-white hover:text-gray-300">Home</a>
                    <a href="#product" className="text-white hover:text-gray-300">Product</a>
                    <a href="#pricing" className="text-white hover:text-gray-300">Pricing</a>
                    <a href="#about" className="text-white hover:text-gray-300">About</a>
                    <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                </div>
           
            {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img className="rounded-full" src="https://res.cloudinary.com/doq50mquo/image/upload/v1725440638/Rectangle_4_vtysq9.png" alt="photo" />
                </div>

            {/* Icone */}
        
            
        </div>
        <section className="bg-cover bg-center h-screen text-center flex flex-col justify-center items-center" >
            <h2 className="text-white text-4xl font-bold">The best products start with Figma</h2>
            <p className="text-white mt-4">Most calendars are designed for teams. Slate is designed for freelancers.</p>
            <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded">Get Started</button>
        </section>

      </div>
     


  );
};

export default Header;


