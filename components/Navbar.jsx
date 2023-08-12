import Image from "next/image";
import React from "react";
import logo_self, { nav_button } from "../constant";
import Logo from "../public/logo/Logo.png";
import Nav_frame_button from "./Nav_frame_button";
import Button from "./Button";
import Discord from "../public/logo/Discord.png";

function Navbar() {
  return (
    <div className="nav_wrap flex justify-between items-center p-6">
      <div className="logo_wrap flex justify-between items-center">
        <div className="image_wrap">
          <Image
            src={Logo}
            alt="self"
            className="rounded-full object-contain logo_wraps"
          />
        </div>

        <div className="logo_name">
          <h1 className="logo_heading">SELF</h1>
        </div>
      </div>
      <div className=" flex justify-between align-center gap-4">
        <Button />
        <Nav_frame_button />
      </div>
    </div>
  );
}

export default Navbar;
