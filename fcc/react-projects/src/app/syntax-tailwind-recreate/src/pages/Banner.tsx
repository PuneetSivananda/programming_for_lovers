import React from "react";

export default function Banner() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <img
              alt=""
              // fetchpriority="high"
              width="530"
              height="530"
              decoding="async"
              data-nimg="1"
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              style={{ color: "transparent" }}
              src="/static/img/blur-cyan.d28a5585.png"
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Never miss the cache again.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Cache every single thing your app could ever do ahead of time,
                so your code never even has to run at all.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <a
                  className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                  href="/"
                >
                  Get started
                </a>
                <a
                  className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                  href="/"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 668 1069"
                width="668"
                height="1069"
                fill="none"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"
              >
                <defs>
                  <clipPath id=":Rqla:-clip-path">
                    <path
                      fill="#fff"
                      transform="rotate(-180 334 534.4)"
                      d="M0 0h668v1068.8H0z"
                    ></path>
                  </clipPath>
                </defs>
                <g
                  opacity=".4"
                  clip-path="url(#:Rqla:-clip-path)"
                  stroke-width="4"
                >
                  <path
                    opacity=".3"
                    d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474"
                    stroke="#334155"
                  ></path>
                  <path
                    d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588"
                    stroke="#334155"
                  ></path>
                  <path
                    d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175"
                    stroke="#334155"
                  ></path>
                  <circle
                    cx="83.5"
                    cy="384.1"
                    r="10.438"
                    transform="rotate(-180 83.5 384.1)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="83.5"
                    cy="200.399"
                    r="10.438"
                    transform="rotate(-180 83.5 200.399)"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="83.5"
                    cy="81.412"
                    r="10.438"
                    transform="rotate(-180 83.5 81.412)"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="183.699"
                    cy="375.75"
                    r="10.438"
                    transform="rotate(-180 183.699 375.75)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="183.699"
                    cy="563.625"
                    r="10.438"
                    transform="rotate(-180 183.699 563.625)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="384.1"
                    cy="651.3"
                    r="10.438"
                    transform="rotate(-180 384.1 651.3)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="484.301"
                    cy="574.062"
                    r="10.438"
                    transform="rotate(-180 484.301 574.062)"
                    fill="#0EA5E9"
                    fill-opacity=".42"
                    stroke="#0EA5E9"
                  ></circle>
                  <circle
                    cx="384.1"
                    cy="749.412"
                    r="10.438"
                    transform="rotate(-180 384.1 749.412)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="384.1"
                    cy="1027.05"
                    r="10.438"
                    transform="rotate(-180 384.1 1027.05)"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="283.9"
                    cy="924.763"
                    r="10.438"
                    transform="rotate(-180 283.9 924.763)"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="183.699"
                    cy="870.487"
                    r="10.438"
                    transform="rotate(-180 183.699 870.487)"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="283.9"
                    cy="738.975"
                    r="10.438"
                    transform="rotate(-180 283.9 738.975)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="83.5"
                    cy="695.138"
                    r="10.438"
                    transform="rotate(-180 83.5 695.138)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="83.5"
                    cy="484.3"
                    r="10.438"
                    transform="rotate(-180 83.5 484.3)"
                    fill="#0EA5E9"
                    fill-opacity=".42"
                    stroke="#0EA5E9"
                  ></circle>
                  <circle
                    cx="484.301"
                    cy="432.112"
                    r="10.438"
                    transform="rotate(-180 484.301 432.112)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="584.5"
                    cy="432.112"
                    r="10.438"
                    transform="rotate(-180 584.5 432.112)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="584.5"
                    cy="642.95"
                    r="10.438"
                    transform="rotate(-180 584.5 642.95)"
                    fill="#1E293B"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="484.301"
                    cy="851.699"
                    r="10.438"
                    transform="rotate(-180 484.301 851.699)"
                    stroke="#334155"
                  ></circle>
                  <circle
                    cx="384.1"
                    cy="256.763"
                    r="10.438"
                    transform="rotate(-180 384.1 256.763)"
                    stroke="#334155"
                  ></circle>
                </g>
              </svg>
            </div>
            <div className="relative">
              <img
                alt=""
                // fetchpriority="high"
                width="530"
                height="530"
                decoding="async"
                data-nimg="1"
                className="absolute -right-64 -top-64"
                style={{ color: "transparent" }}
                src="/syntax/img/blur-cyan.d28a5585.png"
              />
              <img
                alt=""
                // fetchpriority="high"
                width="567"
                height="567"
                decoding="async"
                data-nimg="1"
                className="absolute -bottom-40 -right-44"
                style={{ color: "transparent" }}
                src="/syntax/img/blur-indigo.b752cf77.png"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10"></div>
              <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0"></div>
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0"></div>
                <div className="pl-4 pt-4">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 42 10"
                    fill="none"
                    className="h-2.5 w-auto stroke-slate-500/30"
                  >
                    <circle cx="5" cy="5" r="4.5"></circle>
                    <circle cx="21" cy="5" r="4.5"></circle>
                    <circle cx="37" cy="5" r="4.5"></circle>
                  </svg>
                  <div className="mt-4 flex space-x-2 text-xs">
                    <div className="flex h-6 rounded-full bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300">
                      <div className="flex items-center rounded-full px-2.5 bg-slate-800">
                        cache-advance.config.js
                      </div>
                    </div>
                    <div className="flex h-6 rounded-full text-slate-500">
                      <div className="flex items-center rounded-full px-2.5">
                        package.json
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
                    >
                      01
                      <br />
                      02
                      <br />
                      03
                      <br />
                      04
                      <br />
                      05
                      <br />
                      06
                      <br />
                      07
                      <br />
                    </div>
                    <pre className="text-slate-400 prism-code language-javascript flex overflow-x-auto pb-6">
                      <code className="px-4">
                        <div className="token-line">
                          <span className="token keyword module">export</span>
                          <span className="token plain"> </span>
                          <span className="token keyword module">default</span>
                          <span className="token plain"> </span>
                          <span className="token punctuation">{"{"}</span>
                          <span className="token plain"></span>
                        </div>
                        <div className="token-line">
                          <span className="token plain"> </span>
                          <span className="token literal-property property">
                            strategy
                          </span>
                          <span className="token operator">:</span>
                          <span className="token plain"> </span>
                          <span className="token string">'predictive'</span>
                          <span className="token punctuation">,</span>
                          <span className="token plain"></span>
                        </div>
                        <div className="token-line">
                          <span className="token plain"> </span>
                          <span className="token literal-property property">
                            engine
                          </span>
                          <span className="token operator">:</span>
                          <span className="token plain"> </span>
                          <span className="token punctuation">{"{"}</span>
                          <span className="token plain"></span>
                        </div>
                        <div className="token-line">
                          <span className="token plain"> </span>
                          <span className="token literal-property property">
                            cpus
                          </span>
                          <span className="token operator">:</span>
                          <span className="token plain"> </span>
                          <span className="token number">12</span>
                          <span className="token punctuation">,</span>
                          <span className="token plain"></span>
                        </div>
                        <div className="token-line">
                          <span className="token plain"> </span>
                          <span className="token literal-property property">
                            backups
                          </span>
                          <span className="token operator">:</span>
                          <span className="token plain"> </span>
                          <span className="token punctuation">[</span>
                          <span className="token string">
                            './storage/cache.wtf'
                          </span>
                          <span className="token punctuation">]</span>
                          <span className="token punctuation">,</span>
                          <span className="token plain"></span>
                        </div>
                        <div className="token-line">
                          <span className="token plain"> </span>
                          <span className="token punctuation">{"}"}</span>
                          <span className="token punctuation">,</span>
                          <span className="token plain"></span>
                        </div>
                        <div className="token-line">
                          <span className="token plain"></span>
                          <span className="token punctuation">{"}"}</span>
                        </div>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
