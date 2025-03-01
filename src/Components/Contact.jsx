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
    <div className="flex py-28 justify-center bg-zinc-100 h-[610px] px-56 container mx-auto">
      <div className="">
        <h1 className="text-2xl text-center py-8 font-semibold">
          Feel <span className="text-sky-500">free</span> to{" "}
          <span className="text-red-500">contact</span> me{" "}
          <span className="text-yellow-400">on:</span>
        </h1>
        <div className="grid grid-cols-2 gap-16">
          {contact.map((item, index) => (
            <div className="flex items-center gap-3 py-3 justify-center w-full text-blue-950">
              <div className="text-5xl">{item.icon}</div>
              <div>
                <h1 className="font-semibold">{item.name}</h1>
                <h1>{item.data}</h1>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 justify-center text-blue-950">
            <div className="text-5xl">
              <FaLinkedin />
            </div>
            <div>
              <h1 className="font-semibold">LinkedIn</h1>
              <h1>
                <a
                  href="https://www.linkedin.com/in/dikshit-shrestha-7716a12b9/"
                  target="_blank"
                  className="text-red-500"
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
