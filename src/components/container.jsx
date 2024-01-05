import single from "../assets/img/single.png";
import double from "../assets/img/double.png";
import triple from "../assets/img/triple.png";
const Container = () => {
  return (
    <div className="py-[100px]">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 ">
        <div className=" m-auto shadow-2xl flex flex-col justify-center items-center h-[450px] hover:scale-105 duration-500 w-[80%] p-5">
          <img className=" w-[25%]" src={single} alt="" />
          <h1 className="text-base md:text-2xl font-bold mt-5">
            Web devlopment
          </h1>

          <h1 className="font-bold text-2xl mt-5">$149</h1>
          <p className="font-medium mt-5">
            Lorem ipsum dolor sit amet Sint rofficia,
            <p>Lorem ipsum dolor sit amet. ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </p>
          <button className="bg-green-600 px-5 py-2 rounded-xl font-medium my-5">
            Start Trial
          </button>
        </div>
        <div className=" m-auto bg-gray-100 shadow-xl flex flex-col justify-center items-center h-[450px] hover:scale-105 duration-500 w-[80%] p-5">
          <img className=" w-[25%]" src={double} alt="" />
          <h1 className="text-2xl font-bold mt-5">Digital Marketing</h1>
          <h1 className="font-bold text-2xl mt-5">$149</h1>
          <p className="font-medium mt-5">
            Lorem ipsum dolor sit amet Sint rofficia,
            <p>Lorem ipsum dolor sit amet. ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </p>
          <button className="bg-black text-green-950 px-5 py-2 rounded-xl font-medium my-5 ">
            Start Trial
          </button>
        </div>
        <div className="m-auto shadow-xl flex flex-col justify-center items-center h-[450px] hover:scale-105 duration-500 w-[80%] p-5">
          <img className=" w-[25%]" src={triple} alt="" />
          <h1 className="text-2xl font-bold mt-5">App devlopment</h1>
          <h1 className="font-bold text-2xl mt-5">$149</h1>
          <p className="font-medium mt-5">
            Lorem ipsum dolor sit amet Sint rofficia,
            <p>Lorem ipsum dolor sit amet. ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </p>
          <button className="bg-green-600 px-5 py-2 rounded-xl font-medium my-5">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
