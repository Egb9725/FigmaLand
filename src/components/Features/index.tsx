import { FaSearch, FaChartBar, FaBolt } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
        <p className="text-center mb-12">
          Most calendars are designed for teams.<br />Slate is designed for freelancers
        </p>
        <div className="grid md:grid-cols-3 gap-8 ">
          {[
            { icon: <FaSearch className="text-sky-400 text-4xl" />, title: 'OpenType features Variable fonts', description: 'Slate helps you see how many more days you need to work to reach your financial goal.' },
            { icon: <FaChartBar className="text-sky-400 text-4xl" />, title: 'Design with real data', description: 'Slate helps you see how many more days you need to work to reach your financial goal.' },
            { icon: <FaBolt className="text-sky-400 text-4xl" />, title: 'Fastest way to take action', description: 'Slate helps you see how many more days you need to work to reach your financial goal.' },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
