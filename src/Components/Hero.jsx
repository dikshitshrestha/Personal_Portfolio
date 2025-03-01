import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function Hero() {
  return (
    <div className="bg-zinc-100 h-max py-10 lg:py-28 xl container mx-auto w-full px-4">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
        <div>
          <div className="text-xl lg:text-5xl text-center font-bold">
            <h1>Front-End React Developer</h1>
          </div>
          <div className="py-7 text-zinc-500 lg:text-[19px]">
            <p>
              Hi, I'm Dikshit Shrestha. A passionate Front-end React Developer
              based in Teku, Kathmandu.
            </p>
          </div>
          <div className="flex text-3xl gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/dikshit-shrestha-7716a12b9/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/dikshitshrestha" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://docs.google.com/document/d/1HaYrEYk_AxqG0B9IHUUfaxxPtcpEdoGa/edit?usp=drive_link&ouid=102911768468676265891&rtpof=true&sd=true"
              className="font-semibold text-[17px] flex items-center gap-1 text-red-500 hover:text-red-700 ease-in-out duration-300"
              target="_blank"
            >
              My CV <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
        <div className="h-44 xl:h-96 xl:w-96 rounded-full overflow-hidden shadow-zinc-500 shadow-2xl">
          <img src="/Profile.jpeg" alt="profile" className="h-full w-full" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 lg:gap-8 py-10">
        <h1 className="font-semibold flex">
          Tech Stack <span className="font-thin ml-2">|</span>
        </h1>
        <div className="flex text-2xl gap-4 lg:gap-9">
          <div className="text-[#E34F26]">
            <FaHtml5 />
          </div>
          <div className="text-[#1572B6]">
            <FaCss3Alt />
          </div>
          <div className="text-[#F7DF1E]">
            <FaJs />
          </div>
          <div className="text-[#61DAFB]">
            <FaReact />
          </div>
          <div className="text-[#38BDF8]">
            <RiTailwindCssFill />
          </div>
        </div>
      </div>
    </div>
  );
}
