import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profile from "../assets/Profile.jpeg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function Hero() {
  return (
    <div className="bg-zinc-100 h-[610px] py-28">
      <div className="flex justify-center items-center gap-12">
        <div>
          <div className="text-6xl font-bold">
            <h1>Front-End React</h1>
            <h1>Developer</h1>
          </div>
          <div className="py-7 text-zinc-500 text-[19px]">
            <p>Hi, I'm Dikshit Shrestha. A passionate Front-end React</p>
            <p>Developer based in Teku, Kathmandu.</p>
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
              className="font-semibold text-[17px] flex items-center gap-1 text-red-500"
              target="_blank"
            >
              My CV <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
        <div className="h-72 w-72 rounded-full overflow-hidden shadow-zinc-500 shadow-2xl">
          <img src={profile} alt="profile" className="h-full w-full" />
        </div>
      </div>
      <div className="flex px-[368px] items-center gap-8 py-10">
        <h1 className="font-semibold">
          Tech Stack <span className="font-thin ml-2">|</span>
        </h1>
        <div className="flex text-4xl gap-9">
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
