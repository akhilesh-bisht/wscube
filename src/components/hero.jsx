import Typed from "react-typed";
export const Hero = () => {
  return (
    <div className="bg-[#2699fb] w-full py-12 h-">
      <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
        <div className="text-xl md:text-3xl ">Learn with us</div>
        <h2 className=" text-4xl md:text-6xl text-white  mt-8">
          Grow with us.
        </h2>
        <h4 className="text-2xl md:text-4xl text-white mt-8 ">
          Learn {""}
          <Typed
            strings={["web Devlopment", "Data Science", "Digital Marketing"]}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
          />
        </h4>
        <button className="bg-black text-white px-7 py-2 text-xs  mt-8 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};
