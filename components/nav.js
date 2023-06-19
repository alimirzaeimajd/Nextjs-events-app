import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex bg-sky-300 items-center mx-auto px-2 justify-around h-12">
      <ul>
        <Link
          href="/"
          className="text-gray-950 hover:bg-teal-500 hover:text-white rounded-md px-3 py-2 pl-14 pr-14 font-bold"
        >
          Home
        </Link>
        <Link
          href="/events"
          className="text-gray-950 hover:bg-teal-500 hover:text-white rounded-md px-3 py-2 pl-14 pr-14 font-bold"
        >
          All Events
        </Link>
        <Link
          href="/events/march"
          className="text-gray-950 hover:bg-teal-500 hover:text-white rounded-md px-3 py-2 pl-14 pr-14 font-bold"
        >
          New Events
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
