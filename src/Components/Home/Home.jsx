import React from "react";
import avatarImg from "../../assets/main-img.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          <br />
        Second-year Computer Engineering student with a strong foundation in Python programming and data structures. A passionate speaker, creative writer, and active debater with excellent communication and critical thinking skills.
        </p>
        <a href="/cv.pdf" download>
  <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Contact Me
  </button>
</a>

      </div>
      <div>
      <img 
  className="" 
  src={avatarImg} 
  alt="" 
  style={{ width: "400px", height: "auto" }} 
/>

      </div>
    </div>
  );
};

export default Home;
