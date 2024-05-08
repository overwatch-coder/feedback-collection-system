import React, { useState } from "react";

const RatingButton = ({ value, selected, onClick }) => (
  <button
    className={`rating-button ${
      selected ? "bg-secondary" : "bg-primary"
    } border border-gray-100 rounded-md px-4 py-2 mr-2  text-light hover:scale-105`}
    onClick={() => onClick(value)}
  >
    {value}
  </button>
);

const NumberRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="rating-container">
      <div className="rating-buttons">
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingButton
            key={value}
            value={value}
            selected={rating === value}
            onClick={handleRatingChange}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberRating;
