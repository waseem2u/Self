import React from "react";
import Card from "./Card";
import Image from "next/image";
import Vector from "../public/image/vector_reverse.png";
import Asset from "../public/image/Asset_reverse.png";

const CardReverse = () => {
  return (
    <div className="flex justify-center align-center gap-[26rem] ">
      <div>
        <Image src={Asset} width={600} height={318}/>
      </div>

      <div className="flex justify-center align-center   ">
        <Image src={Vector} width={180} height={277} />
        <Card />
      </div>
    </div>
  );
};

export default CardReverse;
