import FoodCard from "@/Component/Card/FoodCard";
import React from "react";

const getfoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  return data.foods;
};

const FoodsPage = async () => {
  const foods = await getfoods();

  return (
    <div className="p-5">
      {/* Title */}
      <h1 className="font-bold text-2xl text-center underline mb-6">
        Total Foods :<span className="text-amber-400 ml-2">{foods.length}</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
