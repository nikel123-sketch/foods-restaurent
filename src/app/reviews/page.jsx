import ReviewsCard from '@/component/Card/ReviewsCard';
import React from 'react';
import { resolve } from 'styled-jsx/css';

const getreviews=async()=>{
    const res =await fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews");
    const data=await res.json();
    return data.reviews;
}
const ReviewsPage = async() => {
    await new Promise((resolve)=>setTimeout(resolve,3000))
    const reviews=await getreviews();
    console.log(reviews)

    return (
      <div>
        <div className="">
          <h1 className="font-bold text-2xl text-center underline">
            Totall Reviews(<span className='text-lime-400'>{reviews.length}</span>)
          </h1>
        </div>
        <div className="grid gird-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {
                reviews.map(rev=><ReviewsCard key={rev.id} rev={rev}></ReviewsCard>)
            }
        </div>
      </div>
    );
};

export default ReviewsPage;