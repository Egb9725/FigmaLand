import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen text-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://res.cloudinary.com/doq50mquo/image/upload/v1725440643/Rectangle_9_y4ydtr.png')" }}>
      <h2 className="text-white text-4xl font-bold">The best products start with Figma</h2>
      <p className="text-white mt-4">Most calendars are designed for teams. Slate is designed for freelancers.</p>
      <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded">Get Started</button>
    </section>
  );
}

export default Hero;
