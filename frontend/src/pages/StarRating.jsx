import React, { useState } from "react";

const StarRating = ({ rating, onRatingChange, size }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseOver = (rating) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (rating) => {
    onRatingChange(rating);
  };

  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          className={`star cursor-pointer text-3xl ${
            i <= (hoveredRating || rating) ? "text-yellow-500" : "text-gray-500"
          }`}
          onMouseOver={() => handleMouseOver(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

const StartRatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const starSize = 3;

  return (
    <StarRating
      rating={rating}
      onRatingChange={handleRatingChange}
      size={starSize}
    />
  );
};

export default StartRatingComponent;
