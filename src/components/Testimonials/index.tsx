const Testimonials = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
          <div className="max-w-2xl mx-auto text-center">
            <img src="https://res.cloudinary.com/doq50mquo/image/upload/v1725443087/Brands_dx94zi.png" alt="IBM Logo" width={100} height={50} className="mx-auto mb-4" />
            <p className="mb-4">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <div className="flex items-center justify-center">
              <img src="https://res.cloudinary.com/doq50mquo/image/upload/v1725443086/Ellipse_2_kwsl3n.png" alt="User" width={50} height={50} className="rounded-full mr-4" />
              <div>
                <p className="font-semibold">Organize across</p>
                <p className="text-sm text-gray-600">Ui designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  