import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const QuickNavLinks = [
    { name: "Hot Deals", value: "HotDeals" },
    { name: "What's New", value: "WhatsNew" },
    { name: "Smartphones", value: "Smartphones" },
    { name: "Laptops", value: "Laptops" },
    { name: "Clothing", value: "Clothing" },
    { name: "Sports", value: "Sports" },
    { name: "Shoes", value: "Shoes" },
    { name: "Refurbished", value: "Refurbished" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {QuickNavLinks.map((item, index) => (
        <button
          key={index}
          value={item.value}
          className="w-36 py-2 text-center rounded-lg quick-nav-links"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default QuickLinks;
