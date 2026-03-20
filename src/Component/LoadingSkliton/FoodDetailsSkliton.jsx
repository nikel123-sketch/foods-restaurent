import React from "react";

const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-80 bg-gray-300 rounded-xl border-4 border-gray-200"></div>

      {/* Title Skeleton */}
      <div className="h-8 bg-gray-300 rounded w-3/4"></div>

      {/* Category & Price Skeleton */}
      <div className="flex justify-between items-center space-x-4">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/6"></div>
      </div>

      {/* Button Skeleton */}
      <div className="h-10 bg-blue-400 rounded-lg w-1/2 mx-auto"></div>

     
    </div>
  );
};

export default FoodDetailsSkeleton;
