import React from "react";

const FoodsLoadingSklition = () => {
  return (
    <div className="">
     
        <div
         
          className="bg-white rounded-2xl shadow-md p-4 animate-pulse"
        >
          {/* Image */}
          <div className="h-40 bg-gray-300 rounded-xl mb-4"></div>

          {/* Title */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

          {/* Category */}
          <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>

          {/* Price */}
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>

          {/* Buttons */}
          <div className="flex gap-2">
            <div className="h-8 bg-gray-300 rounded w-full"></div>
            <div className="h-8 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
   
    </div>
  );
};

export default FoodsLoadingSklition;
