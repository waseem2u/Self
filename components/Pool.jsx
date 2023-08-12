import React from "react";
import Image from "next/image";
import pool from "../public/image/pool.png";
import { pool_description } from "../constant";
import CustomButton from "./CustomButton";

const Pool = () => {
  return (
    <div>
      <h1 className="pool_heading">
        <span className="header_linear_gradiant">COMING SOON:</span> SELF
        Liquidity Pool{" "}
      </h1>

      <div className="flex justify-center align-center pool_wrapers p-16 mb-[-111px]">
        <div>
          {pool_description.map((x) => (
            <div className="pb-5">

              <h1 className="pool_head">{x.head}</h1>
              <p className="pool_paragrafh">{x.para}</p>
            </div>
          ))}
          <h1 className="pool_headings pt-16 pb-4">
            Subscribe And get Latest news update about Liquidity Pool
          </h1>
          <div>
            <div className="flex gap-4 align-center pool_feild_wrap">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input_wrap"
              />
               <CustomButton
                  children={"Subscribe"}
                  className={"pool_btn"}
                />

            </div>
          </div>
        </div>
        <div>
          <Image
            src={pool}
            alt="pool"
            width={462}
            height={801}
            className="image_pool"
          />
        </div>
      </div>
    </div>
  );
};

export default Pool;
