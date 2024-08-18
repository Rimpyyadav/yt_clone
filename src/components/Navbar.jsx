import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import {AiOutlineBell} from "react-icons/ai"

function Navbar() {
  return (
    <div className="flex justify-between px-6 py-2">
      <div className="flex items-center space-x-4 ">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.02WVhPtxfgFgK48rduNOfAHaD4&pid=Api&P=0&h=180"
          alt=""
          className="w-28 cursor-pointer"
        />
      </div>
      <div className=" flex w-[35%] border border-black">
        <div className="w-[100%] px-3 py-2 border rounded-l-full" >
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
          ></input>
        </div>
        <button className="px-4 py-2 border bg-grey-100 rounded-r-full" >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic size={"42px"} className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 " />
      </div>
      <div className="flex border border-black">
        <RiVideoAddLine className="text-2xl"/>
        <AiOutlineBell className="text-2xl"/>
        <img src="https://c8.alamy.com/comp/2HC40CD/ry-feminine-logo-usable-for-nature-salon-spa-cosmetic-and-beauty-logos-flat-vector-logo-design-template-element-2HC40CD.jpg" alt="" className="outline-none w-28 rounded"  />
 

      </div>
    </div>
  );
}

export default Navbar;
