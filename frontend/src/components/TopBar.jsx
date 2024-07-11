import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const TopBar = () => {
  return (
    <>
      <div className="lg:block hidden ">
        <div className="px-16 text-white absolute z-10  w-full flex justify-between items-center mt-5 ">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#FAB40C]" /> <p>+91 7020044091</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MdEmail className="text-[#FAB40C]" />{" "}
              <p>info@suvidhafoundationedutech.org</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 text-[#FAB40C]">
            <a
              href="https://www.facebook.com/suvidhamahilamandal/"
              target="_blank"
              className="hover:text-white transition-all duration-300 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              className="hover:text-white transition-all duration-300 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/suvidha-foundation/"
              target="_blank"
              className="hover:text-white transition-all duration-300 text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
