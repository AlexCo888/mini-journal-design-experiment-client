import React from "react";

const Card = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => {
  return (
    <>
      <div className="card-layout">
        <img src={imageUrl} alt={title} />
        <div className="card--content">
          <h3>🚩 {location}</h3>
          <a href={googleMapsUrl}>View on Google Maps</a>
          <h1>{title}</h1>
          <h4>
            {startDate} - {endDate}
          </h4>
          <p>{description}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Card;
