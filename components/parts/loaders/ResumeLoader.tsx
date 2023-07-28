import React from "react";
// #TODO: maybe make the loader position more accurate? idk cant get it to align properly but it probably doesnt matter unless we're on bigger screens
const ResumeLoader = () => {
  return (
    <div className="flex flex-col flex-wrap gap-4 pt-16 text-black md:flex-row justify-between">
      <div className="max-w-[50%] md:max-w-[50%]">
        <div className="p-[0.85rem]  mb-2  bg-gray-600 rounded-md animate-pulse mr-12 "></div>

        <div>
          <div className={`flex min-h-[200px] font-sans `}>
            <div className="flex flex-col">
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden bg-gray-500 rounded-md animate-pulse"
                style={{ width: "65px", height: "65px" }}
              ></div>
              {/* Vertical line */}

              <div className="mt-2 w-px grow self-center  bg-slate-300" />
            </div>
            <div className="flex-initial pl-4">
              {/* Title */}
              <div className="p-[0.75rem] mb-[0.40rem] bg-gray-600 animate-pulse rounded-md w-36"></div>

              {/* Tags */}
              <div className="p-[0.45rem] mb-[0.40rem] bg-gray-400 animate-pulse rounded-md mr-16">
                <span>{/* <span className="mx-1">●</span> */}</span>
              </div>
              {/* Description */}
              <div className="pb-5 pt-3 ">
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] mr-16 text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`flex min-h-[200px] font-sans `}>
            <div className="flex flex-col">
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden bg-gray-500 rounded-md animate-pulse"
                style={{ width: "65px", height: "65px" }}
              ></div>
              {/* Vertical line */}
            </div>
            <div className="flex-initial pl-4">
              {/* Title */}
              <div className="p-[0.75rem] mb-[0.40rem] bg-gray-600 animate-pulse rounded-md w-36"></div>

              {/* Tags */}
              <div className="p-[0.45rem] mb-[0.40rem] bg-gray-400 animate-pulse rounded-md mr-16">
                <span>{/* <span className="mx-1">●</span> */}</span>
              </div>
              {/* Description */}
              <div className="pb-5 pt-3 ">
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] mr-16 text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[55%] md:max-w-[50%]  ">
        <div className="p-[0.85rem]  mb-2  bg-gray-600 rounded-md animate-pulse mr-12"></div>

        <div>
          <div className={`flex min-h-[200px] font-sans `}>
            <div className="flex flex-col">
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden bg-gray-500 rounded-md animate-pulse"
                style={{ width: "65px", height: "65px" }}
              ></div>
              {/* Vertical line */}

              <div className="mt-2 w-px grow self-center  bg-slate-300" />
            </div>
            <div className="flex-initial pl-4">
              {/* Title */}
              <div className="p-[0.75rem] mb-[0.40rem] bg-gray-600 animate-pulse rounded-md w-36"></div>

              {/* Tags */}
              <div className="p-[0.45rem] mb-[0.40rem] bg-gray-400 animate-pulse rounded-md mr-16">
                <span>{/* <span className="mx-1">●</span> */}</span>
              </div>
              {/* Description */}
              <div className="pb-5 pt-3 ">
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] mr-16 text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex min-h-[200px] font-sans `}>
            <div className="flex flex-col">
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden bg-gray-500 rounded-md animate-pulse"
                style={{ width: "65px", height: "65px" }}
              ></div>
              {/* Vertical line */}

              <div className="mt-2 w-px grow self-center  bg-slate-300" />
            </div>
            <div className="flex-initial pl-4">
              {/* Title */}
              <div className="p-[0.75rem] mb-[0.40rem] bg-gray-600 animate-pulse rounded-md w-36"></div>

              {/* Tags */}
              <div className="p-[0.45rem] mb-[0.40rem] bg-gray-400 animate-pulse rounded-md mr-16">
                <span>{/* <span className="mx-1">●</span> */}</span>
              </div>
              {/* Description */}
              <div className="pb-5 pt-3 ">
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] mr-16 text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`flex min-h-[200px] font-sans `}>
            <div className="flex flex-col">
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden bg-gray-500 rounded-md animate-pulse"
                style={{ width: "65px", height: "65px" }}
              ></div>
              {/* Vertical line */}
            </div>
            <div className="flex-initial pl-4">
              {/* Title */}
              <div className="p-[0.75rem] mb-[0.40rem] bg-gray-600 animate-pulse rounded-md w-36"></div>

              {/* Tags */}
              <div className="p-[0.45rem] mb-[0.40rem] bg-gray-400 animate-pulse rounded-md mr-16">
                <span>{/* <span className="mx-1">●</span> */}</span>
              </div>
              {/* Description */}
              <div className="pb-5 pt-3 ">
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="p-[0.40rem] mb-[0.40rem] mr-16 text-gray-600 bg-gray-300 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLoader;
