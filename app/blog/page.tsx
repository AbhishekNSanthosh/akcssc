"use client";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram,AiOutlineLink} from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiFillLinkedin /> },
    { icon: <AiFillInstagram /> },
    { icon: <BsWhatsapp /> },
  ];

  const Links = [
    { link: "https://www.facebook.com/IEEECSKS/" },
    { link: "https://www.linkedin.com/company/ieeecsks" },
    { link: "https://www.instagram.com/ieeecsks/" },
    { link: "https://whatsapp.com/channel/0029VaKFZ0e0bIdpmuDApI2t/" },
  ]
  return (
    <div className="pt-[16rem] mt-16 ">
      <footer className="bg-gray-900 flex justify-center items-center text-center px-4">
        <div className="container mx-auto  py-10">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <Image
                src={"/logo1.png"}
                alt="footer_logo"
                width={100}
                height={100}
                className="w-[10rem] mx-auto md:mx-0"
              />
              
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-white justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-gray-700 p-2 rounded-full  hover:text-white hover:bg-[#921C25]"
                      style={{ transition: "all 0.3s" }}
                    >
                      <Link
                      href={Links[index].link}
                      >
                        
                      {icon}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} IEEE CSKS  <br />{" "}
                Design by Web Team of CSKS
          
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Useful Links</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] hover:text-green-400"></span>

              <Link href={"https://www.ieee.org/"}>
              <p className="text-[16px] hover:text-[#921C25] cursor-pointer text-[#646464] font-medium hover:font-bold">
                IEEE 
              </p>
              </Link>
              <Link href={"https://www.computer.org/"}>
              <p className="text-[16px] hover:text-[#921C25] cursor-pointer text-[#646464] font-medium hover:font-bold">
                IEEE Computer Society
              </p>
              </Link>
              <Link href={"https://csks.vercel.app/home"}>
              <p className="text-[16px] hover:text-[#921C25] cursor-pointer text-[#646464] font-medium hover:font-bold">
              IEEE CS Kerala  
              </p>
              </Link>
             
             
            </div>

            {/* right div */}
           

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
