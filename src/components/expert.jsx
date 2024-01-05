import React from "react";
import laptop from "../assets/img/laptop.jpg";
export default function Expert() {
  return (
    <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 p-5">
      <div className=" col-span-1 md:w-[80%]">
        <img src={laptop} alt="" />
      </div>
      <div className="col-span-1 my-4 flex flex-col justify-center ">
        <h1 className="text-green-500 font-bold my-2 ">LEARN FROM EXPERT</h1>
        <p className="text-xs my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          veniam et, eius dignissimos quae eligendi? Placeat maxime facere
          reiciendis iusto quis. Quos id nam libero reiciendis provident, at
          dolor, nostrum obcaecati beatae molestiae delectus mollitia reiciendis
          iusto quis. Quos id nam libero reicie.
        </p>
        <button className="bg-black w-[32%] rounded-lg text-white px-7 py-2 text-xs  mt-2 font-bold ">
          Get Started
        </button>
      </div>
    </div>
  );
}
