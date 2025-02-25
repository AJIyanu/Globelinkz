"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

export default function OurCompetence() {
  const words = [
    "Services",
    "Competence",
    "Expertise",
    "Capabilities",
    "Strengths",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [lineWidth, setLineWidth] = useState("10%");

  useEffect(() => {
    let typingSpeed;

    if (isDeleting) {
      typingSpeed = 100;
    } else {
      typingSpeed = 150;
    }
    const currentWord = words[index];

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  useEffect(() => {
    let add = true;
    const updateLineWidth = () => {
      if (add) {
        const randomWidth = `${10 + Math.random() * 40}%`;
        setLineWidth(randomWidth);
        console.log(randomWidth);
        add = !add;
      } else {
        const randomWidth = `${60 - Math.random() * 40}%`;
        setLineWidth(randomWidth);
        console.log(randomWidth);
        add = !add;
      }
    };

    const interval = setInterval(updateLineWidth, 2000); // Change width every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex text-3xl font-bold mt-[50px] md:ms-[40%] ms-[-110%] md:text-5xl">
        <span>Our&nbsp;</span>
        <span className="relative inline-block">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0"
          >
            {text}
          </motion.span>
          {/* <motion.span
            animate={{ opacity: [0, 1, 1, 0], x: [0, 0, 10, 10] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="absolute"
            style={{ left: `${text.length * 1}ch` }}
          >
            .
          </motion.span> */}
        </span>
      </div>
      <motion.div
        className="h-[1.5px] bg-black mx-auto mb-[50px] mt-2"
        animate={{ width: lineWidth }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ width: "5%" }}
      />
      <div className="w-full h-[800px] bg-gradient-to-t from-indigo-700 to-white md:flex justify-around hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="w-[22%] h-[70%] bg-[#3EE8C4] rounded-xl shadow-md pt-5 flex flex-col items-center"
        >
          <Image
            src="/data_analyst.gif"
            width={400}
            height={400}
            alt="data analysis"
            className=""
          />
          <h1 className="text-5xl font-bold">DATA</h1>
          <h1 className="text-5xl font-bold">ANALYSIS</h1>
          <Separator className="w-[85%] mx-auto bg-black my-2" />
          <p className="text-center mx-3">
            We transform raw data into actionable intelligence, revealing
            trends, patterns, and opportunities to optimize your business
            performance.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[22%] h-[85%] bg-indigo-200 pt-8 mt-[4%] rounded-xl shadow-md flex flex-col items-center"
        >
          <Image
            src="/webdev.gif"
            width={400}
            height={400}
            alt="data analysis"
            className="mix-blend-multiply"
          />
          <h1 className="text-5xl font-bold">WEB</h1>
          <h1 className="text-5xl font-bold">DEVELOPMENT</h1>
          <Separator className="w-[85%] mx-auto bg-black my-2" />
          <p className="text-center mx-3">
            We create custom websites tailored to your specific needs, ensuring
            a seamless user experience, responsive design, and robust
            functionality.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[22%] h-[70%] bg-[#3EE8C4] rounded-xl shadow-md flex flex-col items-center"
        >
          <Image
            src="/digitMarket.gif"
            width={400}
            height={400}
            alt="data analysis"
            className="mix-blend-multiply"
          />
          <h1 className="text-5xl font-bold">DIGITAL</h1>
          <h1 className="text-5xl font-bold">MARKETING</h1>
          <Separator className="w-[85%] mx-auto bg-black my-2" />
          <p className="text-center mx-5">
            We develop and execute data-driven strategies across various
            channels, including SEO, PPC, social media, and email marketing, to
            maximize your online visibility and generate leads.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[22%] h-[85%] bg-indigo-200 pt-8 mt-[4%] rounded-xl shadow-md flex flex-col items-center"
        >
          <Image
            src="/glz.gif"
            width={400}
            height={400}
            alt="data analysis"
            className="mix-blend-multiply"
          />
          <h1 className="text-5xl font-bold">BRANDING/</h1>
          <h1 className="text-5xl font-bold">GRAPHICS</h1>
          <Separator className="w-[85%] mx-auto bg-black my-2" />
          <p className="text-center mx-5">
            Our branding and graphic design services create visually stunning
            logos, marketing materials, and brand guidelines that communicate
            your unique value proposition.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
