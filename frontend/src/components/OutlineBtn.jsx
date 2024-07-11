import React from "react";
import { Link } from "react-router-dom";

const OutlineBtn = ({ name, to }) => {
  return (
    <>
      <Link
        to={to}
        className={`rounded font-medium border border-[#FAB40C] px-8 py-2 text-lg cursor-pointer hover:text-[#FAB40C] hover:bg-[white] transition-all duration-300 hover:border-[white]`}
      >
        {name}
      </Link>
    </>
  );
};

export default OutlineBtn;
