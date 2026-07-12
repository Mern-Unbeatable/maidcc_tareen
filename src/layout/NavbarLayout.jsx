import React from "react";
import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import Container from "./Container";

const NavbarLayout = () => {
  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <Container className="max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex flex-col justify-center no-underline hover:opacity-90 transition-opacity"
          >
            <span className="text-4xl font-black text-logo leading-none tracking-tight font-[Poppins]">
              maids.cc
            </span>
            <span className="text-[13px] font-bold text-primaryCta tracking-wide">
              <span className="text-logo">+nannies</span> +visa services
            </span>
          </Link>

          <Link
            to="#"
            className="flex items-center gap-2 bg-whatsapp hover:opacity-90 text-white px-5 py-2 rounded-full font-medium btn-ani"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default NavbarLayout;
