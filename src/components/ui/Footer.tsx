"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo/logo-removebg.png";
import { RiPhoneFill, RiMailFill, RiMapPinFill } from "react-icons/ri";
import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-gray-900">
      <div className="footer container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 text-secondary justify-items-start sm:justify-items-center  w-full xl:max-w-[1300px]">
        <div className="footer-col-1 sm:col-span-2 md:col-span-1 lg:col-span-2 flex flex-col items-start sm:ml-[-65px] md:ml-0">
          <div className="flex flex-col item-center px-8 md:px-0">
            <Image
              src={logo}
              alt="logo"
              className="logo w-[200px] md:w-4/5 lg:w-2/5 h-auto"
            />
            <p className="text-secondary">
              We deliver quality software products with exceptional reliability.
            </p>
            <ul className="mt-4">
              <li className="flex items-center mb-2">
                <RiPhoneFill className="mr-2 text-accent" />
                <Link
                  href="tel:+8801742828044"
                  className="text-secondary hover:text-accent active:text-accent-dark"
                >
                  +880 1742828044
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <RiMailFill className="mr-2 text-accent" />
                <Link
                  href="mailto:paroimethu@gmail.com"
                  className="text-secondary hover:text-accent active:text-accent-dark"
                >
                  paroimethu@gmail.com
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <RiMapPinFill className="mr-2 text-accent" />
                <p>Dhaka, Bangladesh</p>
                {/* <Link
                  href="https://www.google.com/maps/place/Banasree,+Dhaka/@23.7621306,90.4121949,14z/data=!3m1!4b1!4m6!3m5!1s0x3755b80a03c8e22f:0xd52685f4a2fe003c!8m2!3d23.7619353!4d90.433141!16s%2Fm%2F0j3g75s?entry=ttu"
                  target="_blank"
                  className="text-secondary hover:text-accent active:text-accent-dark"
                >
                  Banasree, Dhaka-1200
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col-2 flex flex-col items-center md:items-center px-8 py-2 sm:p-4">
          <div className="flex flex-col item-start">
            <h3 className="sm:-ml-12 md:-ml-0 text-[1.8rem] text-accent font-semibold mb-2">
              Quick Links
            </h3>
            <ul className="sm:-ml-12 md:-ml-0">
              <li className="text-secondary hover:text-accent active:text-accent-dark mb-2">
                <Link href="/">Resume</Link>
              </li>
              <li className="text-secondary hover:text-accent active:text-accent-dark mb-2">
                <Link href="/">Projects</Link>
              </li>
              <li className="text-secondary hover:text-accent active:text-accent-dark mb-2">
                <Link href="/">Contact</Link>
              </li>
              <li className="text-secondary hover:text-accent active:text-accent-dark mb-2">
                <Link href="/">Blogs</Link>
              </li>
              {/*<li className="text-secondary hover:text-accent active:text-accent-dark mb-2">
                <Link href="/">Combos</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="footer-col-3 flex flex-col items-center md:items-center px-8 py-2 sm:p-4">
          <div className="flex flex-col item-start">
            <h3 className="-mr-12 md:-mr-0 text-[1.8rem] text-accent font-semibold mb-2">
              Get in Touch
            </h3>
            <ul className="-mr-12 md:-mr-0">
              <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2">
                <FaLinkedin />{" "}
                <Link
                  href="https://www.linkedin.com/in/methu-paroi/"
                  className="ml-2"
                  target="_blank"
                >
                  Linked In
                </Link>
              </li>
              <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2">
                <FaGithubSquare />{" "}
                <Link
                  href="https://github.com/MethuParoi"
                  className="ml-2"
                  target="_blank"
                >
                  Github
                </Link>
              </li>

              <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2">
                <FaSquareXTwitter />{" "}
                <Link
                  href="https://x.com/methu_paroi"
                  className="ml-2"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2">
                <FaFacebook />{" "}
                <Link
                  href="https://www.facebook.com/methu.paroi.1/"
                  className="ml-2"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              {/* <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2">
                <FaPinterest />{" "}
                <Link
                  href="https://linkedin.com/in/muhit-khan"
                  className="ml-2"
                  target="_blank"
                >
                  Pinterest
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-t border-gray-600" />
        <div className="flex-1 md:flex justify-center py-2">
          <p className="text-center text-secondary py-2 md:py-4">
            © 2025 Methu Paroi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
