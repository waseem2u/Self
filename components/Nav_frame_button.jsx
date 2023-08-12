import React from "react";
import Image from "next/image";
import Frame from "../public/logo/Frame.png";

const Nav_frame_button = () => {
  return <button className="nav_frame_button">
    <span className="discord">connect</span>
    <Image src={Frame} width={24} height={24} />
  </button>;
};

export default Nav_frame_button;
