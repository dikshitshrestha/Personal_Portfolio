import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profile from "../assets/profile.jpeg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-center items-center gap-12 py-16">
        <div>
          <div className="text-6xl font-bold">
            <h1>Front-End React</h1>
            <h1>Developer</h1>
          </div>
          <div className="py-7 text-zinc-500 text-[19px]">
            <p>Hi, I'm Dikshit Shrestha. A passionate Front-end React</p>
            <p>Developer based in Bode, Bhaktapur.</p>
          </div>
          <div className="flex text-3xl gap-2">
            <a
              href="https://www.linkedin.com/in/dikshit-shrestha-7716a12b9/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/dikshitshrestha" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="h-72 w-72 rounded-full overflow-hidden shadow-zinc-500 shadow-2xl">
          <img src={profile} alt="profile" className="h-full w-full" />
        </div>
      </div>
      <div className="flex px-[375px] items-center gap-8">
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
