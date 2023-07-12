import React, { useState, useEffect } from "react";

// import components
import Logo from "../../assets/img/logo.svg";
import { Nav } from "../NavBar/Nav";
import { NavMobile } from "../NavMobile/NavMobile";
import { Socials } from "../Socials/Socials";

export const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setBg(true) : setBg(false)
    );
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      }flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex item-center justify-between">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </div>
    </header>
  );
};
