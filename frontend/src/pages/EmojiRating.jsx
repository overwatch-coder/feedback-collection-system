import React, { useState } from "react";

const EmojiRating = ({ rating, onRatingChange }) => {
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

  const renderEmojis = () => {
    const emojis = ["😔", "☹️", "😐", "😊", "😃"];

    return emojis.map((emoji, index) => (
      <span
        key={index}
        className={`emoji cursor-pointer text-3xl ${
          index + 1 <= (hoveredRating || rating)
            ? "text-yellow-500"
            : "text-gray-500"
        }`}
        onMouseOver={() => handleMouseOver(index + 1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index + 1)}
      >
        {emoji}
      </span>
    ));
  };

  return <div className="emoji-rating">{renderEmojis()}</div>;
};

const EmojiRatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return <EmojiRating rating={rating} onRatingChange={handleRatingChange} />;
};

export default EmojiRatingComponent;
