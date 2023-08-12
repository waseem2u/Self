import React from "react";
import Image from "next/image";
import journey_self from "../public/image/journey.png";
import CustomButton from "./CustomButton";

const Journey = () => {
  return (
    <div className="flex justify-center align-center pb-[9rem]">
      <div className="journey_self">
        <Image src={journey_self} alt="journey" width={600} height={600} />
      </div>

      <div>
        <div className=" journey_self_wrap">
          <h1 className="journey_heading">
            Journey<span className="header_linear_gradiant"> Begins Here</span>{" "}
          </h1>
        </div>
        <p className="journey_paragrafh">
          Start your journey with SELF, enter the world of digital
          opportunities. Stake now and begin exploring. This isn't just an
          investment—it's an adventure. Stake now, and begin your exploration of
          the ever-evolving landscape of SELF.
        </p>
      </div>
      <CustomButton children={"stake now"} className={"journey_btn"} />
    </div>
  );
};

export default Journey;
