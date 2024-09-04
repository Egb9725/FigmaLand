import React from 'react';

const Icons = () => {
  return (
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
  );
}

export default Icons;