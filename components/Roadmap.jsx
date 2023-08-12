import React from "react";
import Card from "./Card";
import Image from "next/image";
// import Asset from "../public/image/Asset.png";
import Vector from "../public/vector/Vector.svg";
// import CardReverse from "./CardReverse";
import { self_img } from "@/public";

const RoadMap = () => {
  return (
    <div className="pt-[13rem]">
      <h1 className="road_head text-center">
        Your SELF <span className="header_linear_gradiant">Roadmap</span> to
        Staking
      </h1>
      {self_img.map((x) => (
        <div className="flex justify-center align-center gap-[26rem] self_roadmap">
          <div className="flex justify-center align-center  
          
          ">
            <Card />
            <Image
              src={x.img4}
              alt="vector"
              width={180}
              height={253}
              className="vector absolute mt-[2rem] ml-[56rem]"
            />
          </div>
          <Image
            src={x.img3}
            width={600}
            height={318}
            alt="Asset" 
            className="road_image"
          />
        </div>
      ))}
      <div>{/* <CardReverse /> */}</div>
    </div>
  );
};

export default RoadMap;
