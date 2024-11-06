"use client";
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
<div className=" flex justify-center items-center ">
  <div className="flex justify-around items-center gap-5 bg-gray-300 rounded-full p-2 px-4 shadow-lg">
    <Link href="/" className="hover:bg-white hover:shadow-md transition-all duration-300 rounded-full px-4 py-2">Home</Link>
    <Link href="/Profile" className="hover:bg-white hover:shadow-md transition-all duration-300 rounded-full px-4 py-2">Profile</Link>
    <Link href="/Contact" className="hover:bg-white hover:shadow-md transition-all duration-300 rounded-full px-4 py-2">Contact</Link>
  </div>
</div>

  );
};

export default Nav;
