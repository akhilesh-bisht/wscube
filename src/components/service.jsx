import React from "react";

export const Service = () => {
  return (
    <div className=" w-full bg-[#2699fb] p-4">
      <div className="mx-w-[1240px] mx-auto flex items-center flex-col  md:flex  md:flex-row md:justify-around py-10">
        <div>
          <h1 className="text-xl md:text-4xl text-white font-bold">
            Want to learn latest I.T skill?
          </h1>
          <p
            className="text-white my-4
          "
          >
            sign up to newsletter and stay up to date
          </p>
        </div>
        <div className="ml-6">
          <input
            className="px-4 py-1 rounded-lg"
            type="email"
            name=""
            id=""
            placeholder="Enter Email"
          />
          <button className="bg-black w-[32%] rounded-lg text-white px-4 ml-2 py-2 text-xs  mt-2 font-bold ">
            Notify Me
          </button>
          <h1 className=" text-white mt-5">
            We care about protection of your data read our{" "}
            <div className="text-black"> privecy policy</div>
          </h1>
        </div>
      </div>
    </div>
  );
};
