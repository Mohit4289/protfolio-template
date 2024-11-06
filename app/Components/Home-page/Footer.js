import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaSquareGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-4xl font-bold mb-2">Let's Work Together.</h1>
      <p className="text-4xl font-bold text-gray-400">Get In Touch.</p>
      <div className="mt-12 flex justify-center items-center gap-8">
        {/* LinkedIn Icon */}
        <Link
          href="https://www.linkedin.com"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
        >
          <FaLinkedinIn size={35} />
        </Link>

        {/* Mail Icon */}
        <Link
          href="mailto:your-email@example.com"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500"
        >
          <IoMail size={35} />
        </Link>

        {/* GitHub Icon */}
        <Link
          href="https://github.com"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-gray-500"
        >
          <FaSquareGithub size={35} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
