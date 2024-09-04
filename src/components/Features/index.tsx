import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold">Feature One</h4>
            <p>Details about feature one.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Feature Two</h4>
            <p>Details about feature two.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Feature Three</h4>
            <p>Details about feature three.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
