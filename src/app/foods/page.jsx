"use client"
import React, { useEffect, useState } from 'react';


// const getfoods=async()=>{
//     const res =await fetch(
//       `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`,
//     );
//     const data=await res.json();
//     return data.foods
// }
const FoodsPage = () => {
    const [foods,setfoods]=useState([]);
    useEffect(()=>{
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random")
        .then(res=>res.json())
        .then(data=>setfoods(data.foods))
    },[])
//    const foods=await getfoods()
    return (
      <div>
        <h1 className='text-2xl text-center underline'>
          Totall Foods <span className='font-bold text-amber-400'>({foods.length})</span>
        </h1>
      </div>
    );
};

export default FoodsPage;