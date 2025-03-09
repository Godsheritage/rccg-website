import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section: Logo and Social Media */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold uppercase">Union</h2>
            <p className="text-sm tracking-widest">CHURCH</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-6 text-center lg:text-left">
          <p className="font-semibold">Union Church Central Offices</p>
          <p>681 Hollins Ferry Rd, Glen Burnie, MD 21061</p>
          <p>Email: <a href="mailto:info@theunionchurch.com" className="text-gray-300">info@theunionchurch.com</a></p>
          <p>Phone: <a href="tel:4106724260" className="text-gray-300">410.672.4260</a></p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center lg:text-left mt-10">
          {/* About */}
          <div>
            <h3 className="font-bold mb-2">ABOUT</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Our Senior Pastors</a></li>
              <li><a href="#">Our Beliefs</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Join The Team (Jobs)</a></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="font-bold mb-2">MINISTRIES</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="text-green-400">Groups</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Students</a></li>
              <li><a href="#">Outreach</a></li>
              <li><a href="#">Prayer</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-2">CONNECT</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Growth Track</a></li>
              <li><a href="#">Baptisms</a></li>
              <li><a href="#">Dream Team</a></li>
              <li><a href="#">Give</a></li>
              <li><a href="#">Share Your Story</a></li>
            </ul>
          </div>

          {/* Watch */}
          <div>
            <h3 className="font-bold mb-2">WATCH</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Online</a></li>
              <li><a href="#">Sermons</a></li>
              <li><a href="#">Catalyst</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 text-center">
          <h3 className="font-bold mb-3">STAY IN THE LOOP</h3>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-64 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-md font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
