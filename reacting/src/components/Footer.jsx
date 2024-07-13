import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <img className="h-12" src="https://www.nitjsr.ac.in/static/media/logo_new1.85cf87db.png" alt="NITJSR Logo" />
            <p className="mt-2 text-white">National Institute of Technology Jamshedpur</p>
            <p className="mt-2">Jamshedpur, Jharkhand, India</p>
            <p>Email: <a href="mailto:info@nitjsr.ac.in" className="text-blue-400 hover:underline">info@nitjsr.ac.in</a></p>
            <p>Phone: +91-657-237-3407</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 md:w-2/3">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h3 className="text-md font-semibold text-white">Quick Links</h3>
              <ul className="mt-2">
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/academics" className="hover:underline">Academics</a></li>
                <li><a href="/admissions" className="hover:underline">Admissions</a></li>
                <li><a href="/departments" className="hover:underline">Departments</a></li>
                <li><a href="/research" className="hover:underline">Research</a></li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-md font-semibold text-white">Connect with Us</h3>
              <ul className="mt-2">
                <li><a href="https://www.facebook.com/nitjsr" className="hover:underline">Facebook</a></li>
                <li><a href="https://twitter.com/nitjsr" className="hover:underline">Twitter</a></li>
                <li><a href="https://www.linkedin.com/school/nitjsr" className="hover:underline">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nitjsr" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-500">
            Designed, Developed and Hosted by <span className="text-white">WebTeam</span>
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} National Institute of Technology Jamshedpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;