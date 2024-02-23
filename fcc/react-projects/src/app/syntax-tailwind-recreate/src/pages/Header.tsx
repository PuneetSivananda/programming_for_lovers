import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75">
      <div className="mr-6 flex lg:hidden">
        <button className="relative" aria-label="Open navigation">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6 stroke-slate-500"
          >
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
        </button>
        <div
          style={{
            position: "fixed",
            top: "1px",
            left: "1px",
            //     width: 1px;
            // height: 0;
            // padding: 0;
            // margin: -1px;
            // overflow: hidden;
            // clip: rect(0, 0, 0, 0);
            // white-space: nowrap;
            // border-width: 0;
            // display: none;
          }}
        ></div>
      </div>
    </div>
  );
}
