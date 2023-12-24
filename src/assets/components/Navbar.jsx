import React, { useState,useEffect } from "react";
import { Link, useFetcher } from 'react-router-dom'
import Searchbar from "./Searchbar";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  TagIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const UserAccountLink = "/user-account";
  
  const Links = [
    { name: "DEALS", link: "/deals",icon:<TagIcon className='w-6 h-6 inline'/> },
    { name: "CART", link: "/cart",icon:<ShoppingCartIcon className='w-6 h-6 inline'/>},
    { name: "CONTACT", link: "/contact",icon:<InformationCircleIcon className='w-6 h-6 inline'/> },
  ];

  const SubCategoryLinks = [
    { name: "Sub Category 1", link: "/subcategory1"},
    { name: "Sub Category 2", link: "/subcategory2"},
    { name: "Sub Category 3", link: "/subcategory3"},
  ]

  let [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCategoryExpanded,setIsCategoryExpanded] = useState(false);


  useEffect(() => {
    
    const handleResize = () => {
      const mobileThreshold = 768;
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < mobileThreshold);
    };

    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

  },[]);
 

  return (
      <nav className="shadow-md w-full top-0 left-0 mb-2">
        <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
          {/* logo section */}
          <Link to='/home' className="font-extrabold text-2xl cursor-pointer flex items-center gap-1">
              <ShoppingCartIcon className="w-7 h-7 text-blue-600" /> 
              {!isMobile ? <span className="text-green-800">Shop Buddy</span>: ""}
              <Searchbar />
          </Link>

          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>

          {/* linke items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto  left-0 w-full 
            md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
            ${open ? "top-18" : "top-[-490px]"}
            ${isMobile ? "shadow-md rounded-md" : ""}
            `}
          >
            
            <li className="group">
              <div href="#" class="md:ml-8 md:my-0 my-7 font-semibold text-gray-800 cursor-pointer hover:text-blue-400 duration-500 hover:text-xl" 
                onClick={()=>{setIsCategoryExpanded(!isCategoryExpanded)}}>
                CATEGORY  {isCategoryExpanded ?<ChevronUpIcon className='w-6 h-6 inline font-bold'/>: <ChevronDownIcon className='w-6 h-6 inline font-bold'/>}
              </div>
              <div className={`${isCategoryExpanded?"block":"hidden"} ${!isMobile?"absolute":""}
               mt-2 bg-white border rounded-md`}>
                {SubCategoryLinks.map((item)=>(
                  <Link to={item.link} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    {item.name}
                    </Link>
                ))}
              </div>
            </li>

            {Links.map((item) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link to={item.link} className="text-gray-800 hover:text-blue-400 duration-500 hover:text-xl">
                 {item.name}  {item.icon}
                </Link>
              </li>
            ))}

            {isMobile?
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link to={UserAccountLink} className="text-gray-800 hover:text-blue-400 duration-500 hover:text-xl">
                <UserCircleIcon className="w-6 h-6 inline"/> My Account
                </Link>
              </li>:""
            }
            {!isMobile?
                <Link to={UserAccountLink} className="w-7 h-7 md:ml-8 cursor-pointer duration-500 md:static flex 
                justify-center relative" title="My Account">
                    <UserCircleIcon/>
                </Link>
              : ""
            }
          </ul>
          {/* button */}
        </div>
      </nav>
  );
};
export default Navbar;
