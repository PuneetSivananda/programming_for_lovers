"use client";
import React from "react";
import Hamburger from "../components/svg/hamburger";
import { CacheLogoSm, CacheLogoLg } from "../components/svg/cacheLogo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75">
      <div className="mr-6 flex lg:hidden">
        <button className="relative" aria-label="Open navigation">
          <Hamburger />
        </button>
        <div
          style={{
            position: "fixed",
            top: "1px",
            left: "1px",
            width: "1px",
            height: 0,
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: 0,
            display: "none",
          }}
        ></div>
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <a aria-label="Home page" href="/">
          <CacheLogoSm />
          <CacheLogoLg/>
        </a>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <button className="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 lg:w-96 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 md:group-hover:fill-slate-400 dark:fill-slate-500"
          >
            <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"></path>
          </svg>
          <span className="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">
            Search docs
          </span>
          <kbd className="ml-auto hidden font-medium text-slate-400 md:block dark:text-slate-500">
            <kbd className="font-sans">⌘</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        </button>
        <div
          style={{
            position: "fixed",
            top: "1px",
            left: "1px",
            width: "1px",
            height: 0,
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: 0,
            display: "none",
          }}
        ></div>
      </div>

      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <div className="relative z-10" data-headlessui-state="">
          <label
            className="sr-only"
            id="headlessui-listbox-label-:r0:"
            data-headlessui-state=""
          >
            Theme
          </label>

          <button
            onClick={() => {
              console.log("implement toggleDropDown()");
            }}
            className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5"
            aria-label="Theme"
            id="headlessui-listbox-button-:r1:"
            type="button"
            aria-haspopup="listbox"
            aria-expanded="false"
            data-headlessui-state=""
            aria-labelledby="headlessui-listbox-label-:r0: headlessui-listbox-button-:r1:"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4 dark:hidden fill-sky-400"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="hidden h-4 w-4 dark:block fill-sky-400"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
              ></path>
            </svg>
          </button>

          <ul
            className="hidden absolute left-1/2 top-full mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5"
            aria-labelledby="headlessui-listbox-button-:r1:"
            aria-orientation="vertical"
            id="headlessui-listbox-options"
            role="listbox"
            tabIndex={0}
            data-headlessui-state="open"
          >
            <li
              className="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 text-slate-700 dark:text-slate-400 hover:bg-slate-100"
              id="headlessui-listbox-option-:r2h:"
              role="option"
              tabIndex={-1}
              aria-selected="false"
              data-headlessui-state=""
            >
              <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-slate-400"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
                  ></path>
                </svg>
              </div>
              <div className="ml-3">Light</div>
            </li>
            <li
              className="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 text-sky-500 hover:bg-slate-100"
              id="headlessui-listbox-option-:r2i:"
              role="option"
              tabIndex={-1}
              aria-selected="true"
              data-headlessui-state="selected"
            >
              <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-sky-400 dark:fill-sky-400"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
                  ></path>
                </svg>
              </div>
              <div className="ml-3">Dark</div>
            </li>
            <li
              className="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 text-slate-700 dark:text-slate-400 hover:bg-slate-100"
              id="headlessui-listbox-option-:r2j:"
              role="option"
              tabIndex={-1}
              aria-selected="false"
              data-headlessui-state=""
            >
              <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-slate-400"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  ></path>
                </svg>
              </div>
              <div className="ml-3">System</div>
            </li>
          </ul>
        </div>
        <a className="group" aria-label="GitHub" href="https://github.com">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}
