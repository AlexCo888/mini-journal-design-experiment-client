import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:5000/data");
    const jsonData = await response.json();
    setData(jsonData.data);
  };

  return (
    <div className="cardList">
      {data &&
        data.map((item) => (
          <Card
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  );
};

export default CardList;
