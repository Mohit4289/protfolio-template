import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';

const Card = () => {
  return (
    <div className="text-center mt-24">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-4">
        {/* Card 1 */}
        <div className="relative group mx-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/positvius.png"
            width={450}
            height={300} 
            alt="Postivius"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-5">
            <Link href="https://github.com/Mohit4289/Positivus.com">
              <FaGithub size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
            <Link href="https://positivus-com-i8c9-fvrby6tnj-mohit-tiwaris-projects-508a8237.vercel.app/">
              <GoProjectSymlink size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group mx-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/protfolio.png"
            width={450}
            height={300} // Fixed height for consistency
            alt="Postivius"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-5">
            <Link href="https://github.com/Mohit4289/Mohit-s-Protfolio">
              <FaGithub size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
            <Link href="https://mohit-s-protfolio.vercel.app/">
              <GoProjectSymlink size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group mx-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/movie.png"
            width={450}
            height={300} // Fixed height for consistency
            alt="Postivius"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-5">
            <Link href="https://github.com/Mohit4289/Movie-website">
              <FaGithub size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
            <Link href="https://movie-website-chi-three.vercel.app/">
              <GoProjectSymlink size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative group mx-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/better.png"
            width={450}
            height={300} 
            alt="Postivius"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-5">
            <Link href="https://github.com/Mohit4289/better">
              <FaGithub size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
            <Link href="https://better-sable.vercel.app/">
              <GoProjectSymlink size={35} className="text-white hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
