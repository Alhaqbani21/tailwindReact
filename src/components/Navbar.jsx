import React from 'react';

function Navbar() {
  return (
    <div className="w-screen bg-[#FCB700]">
      <ul className="flex justify-center items-center gap-10 p-5 font-bold	max-lg:flex-col">
        <a href="">
          <li>ALL CATEGORIES</li>
        </a>
        <a href="">
          <li className="font-normal text-[#AE7600]">TODAY DEALS</li>
        </a>
        <a href="">
          <li>ELECTRONICES</li>
        </a>
        <a href="">
          <li>CLOTHINGS</li>
        </a>
        <a href="">
          <li>COMPUTERS</li>
        </a>
        <a href="">
          <li>FURNITURES</li>
        </a>
        <a href="">
          <li>MOM & BABY</li>
        </a>
        <a href="">
          <li>BOOKS & MORE</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
