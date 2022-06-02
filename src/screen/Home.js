import React from "react";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import ContainerNews from "../components/ContainerNews";
import KnowContainer from "../components/KnowContainer";
import MubadalaCont from "../components/MubadalaCont";
import LastContainer from "../components/LastContainer";
export default function Home() {

  const renderIcons = ()=>{
    return(
      <div className="flex justify-center space-x-16 uppercase text-white mb-6 mt-5  ">
                <div>
                    <div className="bg-white/[.1] rounded-full p-3 mb-1 ">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" className="w-8 ml-1 mb-1 mt-1 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                            </path>
                        </svg>
                    </div>
                    <a href="# " className="text-xs">M-Power</a>
                </div>

                <div>
                    <div className="bg-white/[.1] rounded-full p-3  ">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="signal"  className="  w-8 ml-3 mb-4 mt-1 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z">
                            </path>
                        </svg>
                    </div>
                    <a href="#" className="text-xs">Performance </a>
                </div>
                <div>
                    <div className="bg-white/[.1] rounded-full p-3 mb-1 ">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="at" className="w-8 ml-1 mb-1 mt-1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z">
                            </path>
                        </svg>
                    </div>
                    <a href="#" className="text-xs">Workplace</a>
                </div>
                <div>
                    <div className="bg-white/[.1] rounded-full p-3 mb-1 ">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="archive" className="w-8 ml-1 mb-1 mt-1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z">
                            </path>
                        </svg>
                    </div>
                    <a href="#" className="text-xs">Learning</a>
                </div>
                </div>
    )
  }
  return (
    <div className="flex  bg-slate-50	">
      <div>
        <Sidebar />
      </div>
      <div>
        <Slider  icons={renderIcons()} />
        <ContainerNews />
        <KnowContainer />
        <MubadalaCont />
        <LastContainer />
      </div>
    </div>
  );
}
