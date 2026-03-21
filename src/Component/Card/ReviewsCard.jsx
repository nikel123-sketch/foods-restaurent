import React from "react";

const ReviewsCard = ({ rev }) => {
  const { user, email, photo, rating, review, likes, date } = rev;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition space-y-4">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <h2 className="font-bold text-lg text-gray-800">{user}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        {"⭐".repeat(rating)}
        <span className="text-gray-600 text-sm ml-2">({rating}/5)</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{review}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>👍 {likes.length} Likes</p>
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
