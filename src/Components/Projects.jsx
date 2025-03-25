import React from "react";
import builder from "../assets/Portfolio_Builder.png";
import ecommerce from "../assets/eCommerce.png";
import kidvora from "../assets/Kidvora.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RiLayout2Fill } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="lg:px-24 px-4 bg-zinc-100 h-auto container mx-auto">
      <h1 className="py-8 text-center text-xl lg:text-2xl font-semibold">
        Each <span className="text-red-500">project</span> is a unique piece of{" "}
        <span className="text-green-500">development</span>
      </h1>
      <div className="flex flex-col xl:flex-row">
        <div className="lg:h-96 w-full">
          <img
            src={ecommerce}
            alt="eCommerce"
            className="h-full object-cover border-[1px] border-black"
          />
        </div>
        <div className="xl:pl-12 py-8 w-full flex flex-col justify-center">
          <h1 className="font-semibold flex items-center gap-1 text-sm xl:text-xl">
            <span className="text-yellow-500 xl:text-xl">Buyverly</span> -
            Shopping eCommerce Website
            <span className="text-orange-500">
              <FaCartShopping />
            </span>
          </h1>
          <p className="py-4 text-justify">
            Buyverly is a shopping website which is an online platform that
            allows users to shop clothing products and accessories. The website
            provides an interface for searching and shopping clothing products
            with many more features. It is fully responsive in all type of
            devices.
          </p>
          <div className="flex justify-center gap-8 py-1 lg:py-4">
            <a
              href="https://github.com/dikshitshrestha/Ecommerce"
              target="_blank"
              className="font-semibold flex items-center gap-1 text-yellow-500"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://clothingecommerce-rouge.vercel.app/"
              target="_blank"
              className="font-semibold flex items-center gap-1 text-yellow-500"
            >
              Live Demo <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
      </div>
      <div className="flex py-4 xl:py-16 flex-col-reverse xl:flex-row">
        <div className="py-8 xl:w-1/2 flex flex-col justify-center">
          <h1 className="font-semibold flex items-center gap-1 text-sm xl:text-xl">
            <span className="text-sky-600"> Nirvanta</span> - Portfolio Website
            Builder
            <span className="text-red-500">
              <RiLayout2Fill />
            </span>
          </h1>
          <p className="py-4 text-justify">
            Nirvanta is a portfolio website builder which is an online platform
            that allows users to create, host and customize their own portfolio
            websites. The website provides an interface for creating portfolio
            website for different types of users from different fields. It is
            fully responsive in all type of devices.
          </p>
          <div className="flex justify-center gap-8 py-1 lg:py-3">
            <a
              href="https://github.com/dikshitshrestha/Portfolio_Builder_Frontend"
              target="_blank"
              className="font-semibold flex items-center gap-1 text-sky-600"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://nirvanta-portfolio-builder.vercel.app/"
              target="_blank"
              className="font-semibold flex items-center gap-1 text-sky-600"
            >
              Live Demo <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
        <div className="lg:h-96 xl:pl-12">
          <img
            src={builder}
            alt="portfolio_builder"
            className="h-full w-full object-cover border-[1px] border-black"
          />
        </div>
      </div>
      <div className="flex flex-col lg:pb-8 xl:pb-16 xl:flex-row">
        <div className="lg:h-96">
          <img
            src={kidvora}
            alt="kidvora"
            className="h-full object-cover border-[1px] border-black"
          />
        </div>
        <div className="xl:pl-12 py-6 lg:py-8 xl:w-1/2 flex flex-col justify-center">
          <h1 className="font-semibold flex items-center gap-1 text-sm xl:text-xl">
            <span className="text-indigo-500">Kidvora</span> - Kid Course
            Website
            <span className="text-yellow-500">
              <FaBookReader />
            </span>
          </h1>
          <p className="py-4 text-justify">
            Kidvora is an interactive e-learning platform designed to provide
            engaging and educational courses for children aged 4 to 12. The
            website offers a fun and meaningful learning experience, fostering
            creativity and curiosity through a wide range of interactive
            content. With a user-friendly interface and a fully responsive
            design, Kidvora ensures seamless access across all devices, making
            learning enjoyable anytime, anywhere.
          </p>
          <div className="flex justify-center gap-8 py-1 lg:py-4">
            <a
              href="https://github.com/dikshitshrestha/Kidvora"
              target="_blank"
              className="font-semibold flex items-center gap-1 text-indigo-500"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://kidvora.vercel.app/"
              target="_blank"
              className="font-semibold flex items-center gap-1 text-indigo-500"
            >
              Live Demo <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
