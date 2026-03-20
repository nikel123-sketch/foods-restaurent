import FoodDetailsSkeleton from '@/component/LoadingSkliton/FoodDetailsSkliton';
import React from 'react';

const fooddetailsloading = () => {
    return (
        <div>
            {
                [...Array(1)].map((_,i)=><FoodDetailsSkeleton key={i}></FoodDetailsSkeleton>)
            }
        </div>
    );
};

export default fooddetailsloading;