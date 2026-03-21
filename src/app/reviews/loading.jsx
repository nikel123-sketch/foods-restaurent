import ReviewsCardSkliton from '@/component/LoadingSkliton/ReviewsCardSkliton';
import React from 'react';

const Loading = () => {
    return (
      <div className="grid gird-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {[...Array(12)].map((_, i) => (
          <ReviewsCardSkliton key={i}></ReviewsCardSkliton>
        ))}
      </div>
    );
};

export default Loading;