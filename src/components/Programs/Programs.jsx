import { Card } from "antd";

const programs = [
  {
    title: "Kids",
    description: "Fun and engaging programs for kids.",
    link: "/kids",
    image: "src/assets/kids.jpg", // Add your image path here
  },
  {
    title: "Students",
    description: "A great place for young people to grow.",
    link: "/students",
    image: "src/assets/kids.jpg", // Add your image path here
  },
];

const Programs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {programs.map((program, index) => (
            <Card key={index} bordered={false} className="shadow-lg text-center p-4">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{program.title}</h3>
              <p className="mt-2">{program.description}</p>
              <a href={program.link} className="text-blue-600 mt-4 block font-medium">
                Learn More
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
