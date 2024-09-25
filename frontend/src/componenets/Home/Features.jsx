import React from "react";

const Features = () => {
  const features = [
    {
      title: "Add, Create, Read, and Update Personalized Tasks",
      color: "bg-pink-200",
    },
    {
      title: "Customize Calendar To Your Preference",
      color: "bg-blue-200",
    },
    {
      title: "Save Tasks to Your Digital Planner",
      color: "bg-orange-200",
    },
    {
      title: "Visualize Tasks on a Task Management System",
      color: "bg-indigo-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-between rounded-md p-6 ${feature.color} min-h-[300px] font-light transition-all duration-300 hover:scale-105`}
        >
          <div>
            <div className="mb-4 text-xl text-gray-800">{feature.title}</div>
          </div>
          {/** PLACEHOLDER IMAGE */}
          <div className="h-48 w-full bg-gray-50"></div>
        </div>
      ))}
    </div>
  );
};

export default Features;
