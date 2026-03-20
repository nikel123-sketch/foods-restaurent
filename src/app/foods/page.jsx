"use client";
import FoodsCard from "@/component/Card/FoodsCard";
import React, { useEffect, useState } from "react";
import Foodsloading from "./foodsloading";




const FoodsPage = () => {
    
  const [foods, setfoods] = useState([]);
  const [loading,setloading]=useState(true)


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
      );
      const data = await res.json();

      // ⏳ delay 5 second
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setfoods(data.foods);
      setloading(false);
    };

    fetchData();
  }, []);

    if (loading) {
      return (
        <Foodsloading></Foodsloading>
      );
    }
  return (
    <div className="p-4">
      <h1 className="text-2xl text-center underline">
        Total Foods{" "}
        <span className="font-bold text-amber-400">({foods.length})</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {foods.map((food) => (
          <FoodsCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;


