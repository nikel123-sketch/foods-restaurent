import FoodsLoadingSklition from '@/component/LoadingSkliton/FoodsLoadingSklition';
import React from 'react';

const Foodsloading = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {[...Array(12)].map((_, i) => (
          <FoodsLoadingSklition key={i}></FoodsLoadingSklition>
        ))}
      </div>
    );
};

export default Foodsloading;