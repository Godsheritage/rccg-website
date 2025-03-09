import React from "react";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-xl">
        <h1 className="text-5xl font-bold">You Belong Here</h1>
        <p className="text-lg mt-4">
          At Union Church, we’ve created an environment where you can build meaningful relationships and find fulfillment by growing your faith.
        </p>
        <Button type="primary" size="large" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
          Plan Your Visit
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
