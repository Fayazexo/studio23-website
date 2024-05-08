import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full md:h-[376px] bg-footer_black flex md:flex-col md:pt-10">
      {/* Laptop View */}
      <div className="hidden md:flex flex-col">
        <div className="flex md:px-32">
          <div className="w-1/4 flex flex-col gap-10">
            <div>
              <Link href="/">
                <Image
                  src="/assets/studio23_logo_white.png"
                  width={500}
                  height={200}
                  alt="Logo"
                  className="w-[150px] md:w-[165px] pl-2 md:pl-0 pt-2 md:pt-0"
                />
              </Link>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <p>@Lorem</p>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
              <div>
                <Link href="/about-us">
                  <span className="font-semibold">About Us</span>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/our-team">
                  <span className="">Our Team</span>
                </Link>
                <Link href="/our-titles">
                  <span className="">Titles</span>
                </Link>
                <Link href="/careers">
                  <span className="">Careers</span>
                </Link>
                <Link href="/contact-us">
                  <span className="">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-semibold text-[17px]">Contact Us</p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3>+88 01200000000</h3>
            </div>
          </div>
          <div className="w-1/4 flex flex-row gap-4 justify-end items-end pb-12">
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a href="https://www.facebook.com/Studio23.BS23">
                <Facebook className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a href="https://www.instagram.com/studio23xyz/?hl=en">
                <Instagram className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a href="https://twitter.com/Studio23xyz">
                <Twitter className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a href="https://www.linkedin.com/company/studio-23-bs/">
                <Linkedin className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex border-t-2 mt-8  justify-center">
        <p className="text-[14px] mt-8">
          Copyright ® Studio23 2024 All rights Rcerved
        </p>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-5 mx-4 my-4">
        <div>
          <Link href="/">
            <Image
              src="/assets/studio23_logo_white.png"
              width={500}
              height={200}
              alt="Logo"
              className="w-[138px]"
            />
          </Link>
        </div>
        <div>
          <p className="text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <Link href="/about-us">
                <span className="font-semibold text-[17px]">About Us</span>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/our-team">
                <span className="">Our Team</span>
              </Link>
              <Link href="/our-titles">
                <span className="">Titles</span>
              </Link>
              <Link href="/careers">
                <span className="">Careers</span>
              </Link>

              <p className="">Contact Us</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <p className="font-semibold text-[17px]">Contact Us</p>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h3>+88 01200000000</h3>
          </div>
        </div>
        <div className="flex gap-5 mb-3">
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a href="https://www.facebook.com/Studio23.BS23">
              <Facebook className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a href="https://www.instagram.com/studio23xyz/?hl=en">
              <Instagram className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a href="https://twitter.com/Studio23xyz">
              <Twitter className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a href="https://www.linkedin.com/company/studio-23-bs/">
              <Linkedin className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
        </div>

        <div className="border-t-2">
          <div className="mt-4 flex justify-center">
            <p className=" text-[13px]">
              Copyright ® Studio23 2024 All rights Rcerved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;