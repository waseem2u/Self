import React from "react";
import { Self_Card } from "../constant";

const Card = () => {
  return (
    <div className="card_wrap absolute mt-[44px] ml-[34rem]">
      {Self_Card.map((x) => (
        <div className="flex justify-center align-center flex-col p-8">
          <h1 className="card_heading">{x.head}</h1>
          <p className="card_paragrafh">
            {x.para}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
