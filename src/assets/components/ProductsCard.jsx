import React from "react";
import AddToCardButton from "./AddToCardButton";

const ProductsCard = () => {
    const imageURL = 'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg'
    const imageArray = new Array(5).fill(null);

  return (
    <div className="product-card">
      <div className="product-thumbnail">
        <img
          src="../images/QuickNavLinks/travel.png"
          loading="lazy"
          className="img-center"
          alt="image"
        />
      </div>
      <div className="product-content px-2 py-1">
        <div className="product-title-wrap flex items-center justify-between mt-2 mb-2">
          <div className="product-title">
            Laptop sleeve MacBook
          </div>
          <div className="product-price">
            <span>$59.00</span>
          </div>
        </div>
        <div className="product-description mb-2">
            Organic Cotton, fairtrade certified
        </div>
        <div className="product-rating mb-15 flex items-center">
            <div className="star-wrap">
                {
                    imageArray.map((_, index)=>(
                        <img alt={`Image ${index + 1}`} key={index} loading="lazy"
                        src={imageURL} className="product-star img-center"/>
                    ))
                }
            </div>
            <div className="total-rating">(121 reviews)</div>
        </div>
        <div className="product-addcart mt-4 mb-2">
            <AddToCardButton/>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
