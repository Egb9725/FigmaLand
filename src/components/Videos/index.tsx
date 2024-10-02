import { FaPlay } from 'react-icons/fa'; // Import de l'icône de play

const Videos = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div
          className="relative w-full h-[300px] md:h-[400px] lg:h-[658.3px] rounded-lg overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/doq50mquo/image/upload/v1725440641/screen_kieprv.png')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <FaPlay className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
