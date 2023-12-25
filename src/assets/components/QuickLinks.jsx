import React from "react";
import { Carousel } from "@material-tailwind/react";


const QuickLinks = () => {
  const QuickNavLinks = [
    { name: "Hot Deals", value: "HotDeals",imageUrl:"../images/hotdeals.png" },
    { name: "Smartphones", value: "Smartphones", imageUrl:"../images/smartphones.webp" },
    { name: "Laptops", value: "Laptops",imageUrl:"../images/laptop.png"  },
    { name: "Clothing", value: "Clothing",imageUrl:"../images/clothing.jpg"  },
    { name: "Sports", value: "Sports",imageUrl:"../images/sports.webp"  },
    { name: "Travel", value: "Travel",imageUrl:"../images/travel.png"  },

  ];

  return (
    <>
      <div className="flex flex-wrap m-5  flex-col ">
        <div className="font-extrabold text-3xl mb-6">
          <h1>Shop Our Top Categories</h1>  
        </div>
        <div className="flex flex-wrap gap-4 flex-row">
          {
            QuickNavLinks.map((item)=>(
              <div 
              key={item.value} 
              className="box"
             >
              <img src={item.imageUrl} loading="lazy" className="box-image"/>
                <h2 className="box-text">{item.name}</h2>
              </div>
            ))
          }

        </div>
      </div>
    </>
  );
};

export default QuickLinks;
