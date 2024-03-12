import React from "react";

type Props = {};

const Hamburger = (props: Props) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      className="h-6 w-6 stroke-slate-500"
    >
      <path d="M4 7h16M4 12h16M4 17h16"></path>
    </svg>
  );
};

export default Hamburger;
