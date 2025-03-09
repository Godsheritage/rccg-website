import React from "react";

const missionItems = [
  {
    title: "Weekends",
    description:
      "Add us to your weekend plans. At our services, you’ll hear great music and a relevant message that’s enjoyable, engaging, and leaves you feeling inspired and empowered—and we guarantee that your kids will love it too!",
    link: "/plan-your-visit",
    buttonText: "PLAN YOUR VISIT",
  },
  {
    title: "Groups",
    description:
      "We are all meant to have community. Groups allow you to experience real relationships that will change your life and grow your faith. Whether it’s jogging, prayer, or a men’s group, there is something for you.",
    link: "/groups",
    buttonText: "EXPLORE GROUPS",
  },
  {
    title: "Growth Track",
    description:
      "The Growth Track will help you discover your unique design. You’ll learn more about yourself, your God-given gifts, your distinct personality, and how it all fits together to impact the world around you.",
    link: "/growth-track",
    buttonText: "GET STARTED",
  },
  {
    title: "Serve",
    description:
      "Our Dream Team moves the vision forward. From our parking lots to our auditoriums to our kids’ team, there is an opportunity for you to serve others and live out your God-given purpose.",
    link: "/serve",
    buttonText: "GET INVOLVED",
  },
];

const MissionStatement = () => {
  return (
    <section className="py-16 px-8 bg-white text-black">
      <div className="max-w-5xl mx-auto flex ">
        <div className="flex flex-col">
          <h2 className="text-8xl font-extrabold uppercase leading-tight py-3">
            WE EXIST TO UNITE YOU WITH YOUR PURPOSE
          </h2>
          <p className="text-xl font-bold mt-4">AND HERE’S HOW</p>
        </div>
        <div className="mt-8 space-y-8">
          {missionItems.map((item, index) => (
            <div key={index} className="text-left">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="inline-block bg-black text-white px-6 py-2 font-bold text-sm uppercase tracking-wide windi-button"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
