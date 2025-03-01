import React from "react";
import builder from "../assets/Portfolio_Builder.png";
import ecommerce from "../assets/eCommerce.png";
import salon from "../assets/salon.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RiLayout2Fill } from "react-icons/ri";
import { RiScissors2Line } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="px-24 bg-zinc-100 h-auto">
      <h1 className="py-8 text-center text-2xl font-semibold">
        Each <span className="text-red-500">project</span> is a unique piece of{" "}
        <span className="text-green-500">development</span>
      </h1>
      <div className="flex">
        <div className="h-96">
          <img
            src={ecommerce}
            alt="eCommerce"
            className="h-full object-cover border-[1px] border-black"
          />
        </div>
        <div className="pl-12 py-8 w-1/2 flex flex-col justify-center">
          <h1 className="font-semibold flex items-center gap-1">
            <span className="text-yellow-500">Buyverly</span> - Shopping
            eCommerce Website
            <span className="text-orange-500">
              <FaCartShopping />
            </span>
          </h1>
          <p className="py-4 text-justify">
            Buyverly is a shopping website which is an online platform that
            allows users to shop clothing products and accessories. The website
            provides an interface for searching and shopping clothing products
            with many more features.
          </p>
          <div className="flex gap-8 py-4">
            <a
              href="https://github.com/dikshitshrestha/Ecommerce"
              target="_blank"
              className="font-semibold flex items-center gap-1.5"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://clothingecommerce-rouge.vercel.app/"
              target="_blank"
              className="font-semibold flex items-center gap-1"
            >
              Live Demo <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
      </div>
      <div className="flex py-16">
        <div className="py-8 w-1/2 flex flex-col justify-center">
          <h1 className="font-semibold flex items-center gap-1">
            <span className="text-sky-600">Nirvanta</span> - Portfolio Website
            Builder
            <span className="text-red-500">
              <RiLayout2Fill />
            </span>
          </h1>
          <p className="py-4 text-justify">
            Nirvanta is a portfolio website builder which is an online platform
            that allows users to create, host and customize their own portfolio
            websites. The website provides an interface for creating portfolio
            website for different types of users from different fields.
          </p>
          <div className="flex gap-8 py-4">
            <a
              href="https://github.com/dikshitshrestha/Portfolio_Builder_Frontend"
              target="_blank"
              className="font-semibold flex items-center gap-1.5"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://nirvanta-portfolio-builder.vercel.app/"
              target="_blank"
              className="font-semibold flex items-center gap-1"
            >
              Live Demo <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
        <div className="h-96 pl-12">
          <img
            src={builder}
            alt="portfolio_builder"
            className="h-full object-cover border-[1px] border-black"
          />
        </div>
      </div>
      <div className="flex pb-16">
        <div className="h-96">
          <img
            src={salon}
            alt="salon"
            className="h-full object-cover border-[1px] border-black"
          />
        </div>
        <div className="pl-12 py-8 w-1/2 flex flex-col justify-center">
          <h1 className="font-semibold flex items-center gap-1">
            <span className="text-emerald-700">Masters & Mane</span> - Hair
            Salon Website
            <span className="text-yellow-500">
              <RiScissors2Line />
            </span>
          </h1>
          <p className="py-4 text-justify">
            Masters & Mane is a hair salon website which is an online platform
            that allows users to purchase barber services and other salon
            products from home. The website provides an interface for shopping,
            purchasing barber service and contact with own personal barber from
            home.
          </p>
          <div className="flex gap-8 py-4">
            <a
              href="https://github.com/dikshitshrestha/Hair_Salon"
              target="_blank"
              className="font-semibold flex items-center gap-1.5"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://mastersandmane.vercel.app/"
              target="_blank"
              className="font-semibold flex items-center gap-1"
            >
              Live Demo <LuSquareArrowOutUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
