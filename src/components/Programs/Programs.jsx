import React from "react";
import { Card } from "antd";

const programs = [
  { title: "Kids", description: "Fun and engaging programs for kids.", link: "/kids" },
  { title: "Students", description: "A great place for young people to grow.", link: "/students" }
];

const Programs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {programs.map((program, index) => (
            <Card key={index} title={program.title} bordered={false} className="shadow-lg text-center">
              <p>{program.description}</p>
              <a href={program.link} className="text-blue-600 mt-4 block">Learn More</a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
