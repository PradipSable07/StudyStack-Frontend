import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Centered Photo */}
      <img
        src="https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas="
        alt="Your Photo"
        className="rounded-full w-32 h-32 mb-4"
      />

      {/* First Row */}
      <div className="flex mb-4">
        {/* First Column */}
        <div className="mr-8">
          <p className="font-bold">First Name:</p>
          <p>Your First Name</p>
        </div>

        {/* Second Column */}
        <div>
          <p className="font-bold">Last Name:</p>
          <p>Your Last Name</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex">
        {/* Third Column */}
        <div className="mr-8">
          <p className="font-bold">PRN Number:</p>
          <p>Your PRN Number</p>
        </div>

        {/* Fourth Column */}
        <div>
          <p className="font-bold">Email:</p>
          <p>Your Email</p>
        </div>
      </div>
    </div>
  );
};

export default About;
