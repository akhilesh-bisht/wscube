import { RiMenuLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px]  flex justify-between items-center mx-auto py-[15px]">
        <div className="text-3xl font-bold">WsCube Tech</div>
        <ul>
          {toggle ? (
            <IoCloseSharp
              onClick={() => setToggle(!toggle)}
              className="text-2xl md:hidden block"
            />
          ) : (
            <RiMenuLine
              onClick={() => setToggle(!toggle)}
              className="text-2xl md:hidden block"
            />
          )}

          <li className="hidden md:flex text-white  gap-10 ">
            <a href="#">Home</a>
            <a href="#">company</a>
            <a href="#">resource</a>
            <a href="#">contact</a>
          </li>
        </ul>
        {/* responsive */}
        <li
          className={`duration-500 md:hidden w-full h-screen flex flex-col text-white fixed top-24 
        
        bg-black ${toggle ? `left-0` : `left-[-100%]`}`}
        >
          <a href="#" className="p-5">
            Home
          </a>
          <a href="#" className="p-5">
            company
          </a>
          <a href="#" className="p-5">
            resource
          </a>
          <a href="#" className="p-5">
            contact
          </a>
        </li>
      </div>
    </div>
  );
};
export default Header;
