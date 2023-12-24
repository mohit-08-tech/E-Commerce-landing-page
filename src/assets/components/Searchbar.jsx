import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  return (
    <>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full py-3 px-12 text-sm border border-gray-400
             focus:border-blue-500 focus:outline-none rounded-full"
            placeholder="Search products"
          />
          <button
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-white focus:outline-none
               rounded-full text-sm px-4 py-1"
          >
            <MagnifyingGlassIcon className="h-5 w-6 text-black hover:h-6" />
          </button>
        </div>
    </>
  );
};

export default Searchbar;
