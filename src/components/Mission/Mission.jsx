import React from "react";
import { Card, Button } from "antd";

const missionItems = [
  { title: "Weekends", description: "Experience inspiring music and a relevant message.", link: "/plan-your-visit" },
  { title: "Groups", description: "Connect through various community groups.", link: "/groups" },
  { title: "Growth Track", description: "Discover your unique gifts and purpose.", link: "/growth-track" },
  { title: "Serve", description: "Make an impact by serving others.", link: "/serve" }
];

const MissionStatement = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">WE EXIST TO UNITE YOU WITH YOUR PURPOSE</h2>
        <p className="text-gray-600 mt-2">AND HERE’S HOW</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {missionItems.map((item, index) => (
            <Card key={index} title={item.title} bordered={false} className="shadow-lg">
              <p>{item.description}</p>
              <Button type="primary" className="mt-4">
                <a href={item.link}>Learn More</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
