import React from "react";
import ProductsCard from "./ProductsCard";

const BestDeals = () => {
    const productsArray = new Array(6).fill(null);
  return (
    <div className="flex flex-wrap mx-5 mb-20 flex-col px-6">
      <div className="font-extrabold text-3xl mb-6">
        <h1>Todays Best Deals For You!</h1>
      </div>
      <div className="flex flex-wrap gap-5 flex-row">
        {
            productsArray.map((_,index)=>(
                <ProductsCard key={index}/>
            ))
        }
        
      </div>
    </div>
  );
};

export default BestDeals;
