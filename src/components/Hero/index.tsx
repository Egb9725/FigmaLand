const Hero = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('https://res.cloudinary.com/doq50mquo/image/upload/v1725440643/Rectangle_9_y4ydtr.png')",}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">The best products start with Figma</h1>
        <p className="text-xl mb-8">
          Most calendars are designed for teams. Slate is designed for freelancers
        </p>
      </div>
    </section>
  );
};

export default Hero;
