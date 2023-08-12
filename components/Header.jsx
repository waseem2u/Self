import React from "react";
import Image from "next/image";
import self_token from "../public/image/self_token.png";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between align-center">
        <div className="flex justify-center align-center pt-[89px] pl-[23px]">
          <div className="w-[9px] h-[142px] line_gradiant"></div>
          <div className=" header_wrap">
            <h1 className="header_self">BOOST YOUR SELF </h1>
            <span className="header_linear_gradiant">STAKE NOW!</span>
          </div>
          <p className="header_paragrafh">
            Unlock a universe of possibilities in the SELF ecosystem with a
            simple act - staking your SELF tokens! Revel in a spectrum of unique
            perks, earn delightful rewards and shape your digital journey.
            Unleash the true essence of your SELF. Embark on your staking
            adventure today!
          </p>
        </div>

        <div className="self_token">
          <Image src={self_token} alt="self" width={604} height={606} className="self_wrap"/>
        </div>
      </div>
      <CustomButton children={"STAKE NOW"} className={"stake_btn"} />
    </div>
  );
};

export default Header;
