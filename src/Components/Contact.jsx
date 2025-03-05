import React from "react";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contact = [
    {
      name: "Mail",
      icon: <IoIosMail />,
      data: "work.dikxitshrestha99@gmail.com",
    },
    {
      name: "Phone Number",
      icon: <MdLocalPhone />,
      data: "+977-9813344279",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      data: "+977-9813344279",
    },
  ];
  return (
    <div className="flex lg:py-28 py-6 justify-center bg-zinc-100 lg:h-[610px] lg:px-56 container mx-auto">
      <div>
        <h1 className="lg:text-2xl text-xl text-center lg:py-8 font-semibold">
          Feel <span className="text-sky-500">free</span> to{" "}
          <span className="text-red-500">contact</span> me{" "}
          <span className="text-yellow-400">on:</span>
        </h1>
        <div className="flex flex-col justify-start lg:grid md:gap-8 lg:grid-cols-2 gap-5 mt-5 lg:gap-16">
          {contact.map((item, index) => (
            <div className="flex items-center gap-3 justify-start w-full text-blue-950">
              <div className="lg:text-5xl text-4xl">{item.icon}</div>
              <div>
                <h1 className="font-semibold text-sm">{item.name}</h1>
                <h1 className="text-sm">{item.data}</h1>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 lg:pl-2 text-blue-950">
            <div className="lg:text-5xl text-4xl">
              <FaLinkedin />
            </div>
            <div>
              <h1 className="font-semibold text-sm">LinkedIn</h1>
              <h1>
                <a
                  href="https://www.linkedin.com/in/dikshit-shrestha-7716a12b9/"
                  target="_blank"
                  className="text-red-500 text-sm"
                >
                  Click Here
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
