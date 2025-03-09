// import React from "react";
// import { Button } from "antd";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('src/assets/church1.jpg')" }}>
//       <div className="bg-black bg-opacity-50 p-8 rounded-xl">
//         <h1 className="text-5xl font-bold">You Belong Here</h1>
//         <p className="text-lg mt-4">
//           At Union Church, we’ve created an environment where you can build meaningful relationships and find fulfillment by growing your faith.
//         </p>
//         <Button type="primary" size="large" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
//           Plan Your Visit
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <div className="text-white flex ">
          <h1 className="text-9xl font-bold uppercase">
            YOU{" "}
            <span className="bg-green-500 text-white px-4 py-2 inline-block">
              BELONG
            </span>{" "}
            HERE
          </h1>
          <div className=" max-w-2xl">
            <p className="text-2xl mt-6 leading-relaxed">
              I welcome you in the name of the Lord Jesus Christ our Savior and thank you for visiting this website. Christ Villa is a community church located in Parkville, North of Baltimore Maryland, where we believe in the Full Gospel of Jesus Christ, sharing the Word of God with clarity and relevance, a place where fervent and effectual praying is a lifestyle, offering intense praise and extreme worship unto Jehovah the King of Kings.
            </p>
          
            <button className="mt-6 bg-white text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              PLAN YOUR VISIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
