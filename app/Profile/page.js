import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { MdWork } from 'react-icons/md';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-16">
      {/* About Me Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Hello! I'm Mohit, a passionate front-end developer with a keen interest in crafting responsive
          and user-friendly websites. I love working with modern technologies like React, JavaScript, and
          Tailwind CSS to build web applications that are both functional and visually appealing.
        </p>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My Skills
        </h2>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="text-center">
            <FaHtml5 size={50} className="text-orange-500" />
            <h3 className="mt-2 text-xl font-semibold">HTML</h3>
          </div>
          <div className="text-center">
            <FaCss3Alt size={50} className="text-blue-500" />
            <h3 className="mt-2 text-xl font-semibold">CSS</h3>
          </div>
          <div className="text-center">
            <FaReact size={50} className="text-blue-600" />
            <h3 className="mt-2 text-xl font-semibold">React</h3>
          </div>
          <div className="text-center">
            <FaNodeJs size={50} className="text-green-600" />
            <h3 className="mt-2 text-xl font-semibold">Node.js</h3>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My Experience
        </h2>
        <div className="flex justify-center items-center gap-16">
          <div className="text-center">
            <IoIosSchool size={50} className="text-gray-600" />
            <h3 className="mt-2 text-xl font-semibold">Education</h3>
            <p className="mt-2 text-gray-500">BSc in Information Technology</p>
          </div>
          <div className="text-center">
            <MdWork size={50} className="text-gray-600" />
            <h3 className="mt-2 text-xl font-semibold">Work</h3>
            <p className="mt-2 text-gray-500">2 months of web development internship at Codsoft</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <p className="text-lg sm:text-xl text-gray-600">
          Connect with me on{' '}
          <a href="https://www.linkedin.com/in/mohit-tiwari-1967b32a5/" className="text-blue-600 hover:underline">
            LinkedIn
          </a>{' '}
          or check my{' '}
          <a href="https://github.com/Mohit4289" className="text-gray-800 hover:underline">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Page;
