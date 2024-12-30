"use client";
import React, { useState, useRef } from "react";
import Button from "../ui/Button";
import { RiMailFill, RiMapPinFill, RiPhoneFill } from "react-icons/ri";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const GetInTouch = () => {
  const [formStatus, setFormStatus] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("");
    setFormMessage("");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormMessage("Your message has been sent successfully!");
      } else {
        setFormStatus("error");
        setFormMessage(
          "There was an issue sending the message. Please try again."
        );
      }
    } catch (error) {
      setFormStatus(String(error));
      setFormMessage(
        "There was an issue sending the message. Please try again."
      );
    }
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <main
      id="get-in-touch"
      className={`h-full flex justify-center items-center px-5 md:px-0 max-w-[1300px]`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center backdrop-blur-[2px] w-full">
        <div className="container mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight md:mb-20 text-center animate__animated animate__fadeInUp animate__slow">
            Get in <span className=" text-teal-400">Touch</span>
          </h1>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 md:grid-cols-2 hi">
            <div className="bg-primary bg-opacity-80 backdrop-blur-sm text-gray-300 p-8 rounded-lg animate__animated animate__fadeInLeft animate__slow">
              <h3 className="text-2xl font-bold mb-4 hidden md:block">
                Reach Out
              </h3>
              <div className="flex flex-col justify-around h-full">
                <div className="flex flex-col justify-center h-full">
                  <div className="mb-6">
                    <p className="font-medium text-lg text-gray-400">
                      If you have any questions or would like to collaborate
                      with me, feel free to reach out through the social media
                      links provided below. Alternatively, you can send me a
                      direct message, and I will respond to you via email as
                      soon as possible. I&apos;m looking forward to hearing from
                      you and discussing potential opportunities to work
                      together.
                    </p>
                  </div>
                  <div className="mb-4 ml-2">
                    <ul className="mt-4">
                      <li className="flex items-center mb-2">
                        <RiPhoneFill className="mr-2 text-teal-400 h-6 w-6" />
                        <Link
                          href="tel:+8801742828044"
                          className="text-md font-medium"
                        >
                          +880 1742828044
                        </Link>
                      </li>
                      <li className="flex items-center mb-2">
                        <RiMailFill className="mr-2 text-teal-400 h-6 w-6" />
                        <Link
                          href="mailto:paroimethu@gmail.com"
                          className="text-md font-medium"
                        >
                          paroimethu@gmail.com
                        </Link>
                      </li>
                      <li className="flex items-center mb-2">
                        <RiMapPinFill className="mr-2 text-teal-400 h-6 w-6" />
                        <p className="text-md font-medium">Dhaka, Bangladesh</p>
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
                  {/* social links */}
                  <div className="flex items-center justify-start gap-x-4 mt-2">
                    <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2 ">
                      {" "}
                      <Link
                        href="https://www.linkedin.com/in/methu-paroi/"
                        className="ml-2"
                        target="_blank"
                      >
                        <FaLinkedin className="h-8 w-8 text-teal-400 hover:text-teal-600" />
                      </Link>
                    </li>
                    <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2 animate__animated animate__fadeInUp animate__slow">
                      {" "}
                      <Link
                        href="https://github.com/MethuParoi"
                        className="ml-2"
                        target="_blank"
                      >
                        <FaGithubSquare className="h-8 w-8 text-teal-400 hover:text-teal-600" />
                      </Link>
                    </li>

                    <li className="flex text-secondary hover:text-accent active:text-accent-dark items-center mb-2 animate__animated animate__fadeInUp animate__slow">
                      {" "}
                      <Link
                        href="https://x.com/methu_paroi"
                        className="ml-2"
                        target="_blank"
                      >
                        <FaSquareXTwitter className="h-8 w-8 text-teal-400 hover:text-teal-600" />
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight animate__slow">
              <h3 className="text-accent drop-shadow-lg text-xl font-bold mb-4">
                Leave a message
              </h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8 px-5 md:px-0"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY}
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-50"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="first_name"
                      className="shadow-sm bg-primary bg-opacity-80 backdrop-blur-sm border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-50"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="shadow-sm bg-primary bg-opacity-80 backdrop-blur-sm border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    className="block p-2.5 w-full text-sm text-white bg-primary bg-opacity-80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>

                <Button
                  type="details-btn"
                  label={"Send Message"}
                  varient="rocket"
                  onClick={handleButtonClick}
                />
                {formStatus && (
                  <p
                    className={` text-lg ${
                      formStatus === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {formMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetInTouch;
