import React from "react";


const QuickLinks = () => {
  const QuickNavLinks = [
    { name: "Hot Deals", value: "HotDeals",imageUrl:"../images/QuickNavLinks/hotdeals.png" },
    { name: "Smartphones", value: "Smartphones", imageUrl:"../images/QuickNavLinks/smartphones.webp" },
    { name: "Laptops", value: "Laptops",imageUrl:"../images/QuickNavLinks/laptop.png"  },
    { name: "Clothing", value: "Clothing",imageUrl:"../images/QuickNavLinks/clothing.jpg"  },
    { name: "Sports", value: "Sports",imageUrl:"../images/QuickNavLinks/sports.webp"  },
    { name: "Travel", value: "Travel",imageUrl:"../images/QuickNavLinks/travel.png"  },

  ];

  return (
    <>
      <div className="flex flex-wrap mx-5 mt-10 mb-20  flex-col px-6">
        <div className="font-extrabold text-3xl mb-6">
          <h1>Shop Our Top Categories</h1>  
        </div>
        <div className="flex flex-wrap gap-5 flex-row">
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
