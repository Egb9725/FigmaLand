const Partenaires = () => {
    return (
      
      <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Partners</h2>
              <p className="text-center mb-12">
                Most calendars are designed for teams.<br />Slate is designed for freelancers
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: 'Google', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725446614/logos_google_1_c1j1qy.png' },
                  { name: 'Amazon', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725443086/Rectangle_w0ape0.png' },
                  { name: 'Microsoft', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725443086/Rectangle_1_mh7h60.png' },
                  { name: 'Uber', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725443086/Rectangle_2_cuy3ek.png' },
                  { name: 'Dropbox', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725443086/Rectangle_3_kemb8w.png' },
                  { name: 'Google', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725446614/logos_google_1_c1j1qy.png' },
                  { name: 'Uber', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725443086/Rectangle_2_cuy3ek.png' },
                  { name: 'Amazon', src: 'https://res.cloudinary.com/doq50mquo/image/upload/v1725443086/Rectangle_w0ape0.png' },
                ].map((partner, index) => (
                  <div key={index} className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
                    <img
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      className="h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
      </section>

    );
  }
  
  export default Partenaires;
  