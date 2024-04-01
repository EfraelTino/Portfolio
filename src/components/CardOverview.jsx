import React from "react";
import { BiSolidUserCheck } from "react-icons/bi";
import { BiBrightness } from "react-icons/bi";

import { BiCodeAlt } from 'react-icons/bi';

export default function Card({t}) {
  return (
    <>
      <div className="w-full sm:w-full md:w-4/12 full p-1 sm:p-2">
        <div className="bg-zinc-900 border-2  border-amber-400 dark:border-amber-400   rounded-xl flex flex-col justify-center m-1 items-center p-10 py-12 h-full">
          <BiCodeAlt  className="text-slate-100 text-[50px]" />
          <h3 className=" mt-3 text-amber-400 dark:text-slate-100 text-center font-bold text-[20px]">
            {t("titles.fs")}
          </h3>
        </div>
      </div>
      <div className="w-full sm:w-full md:w-4/12 full p-1 sm:p-2">
        <div className="bg-zinc-900 border-2  border-amber-400 dark:border-amber-400   rounded-xl flex flex-col justify-center m-1 items-center p-10 py-12 h-full">

        <BiSolidUserCheck  className="text-slate-100 text-[50px]"/>

          <h3 className=" mt-3 text-amber-400 dark:text-slate-100 text-center font-bold text-[20px]">
          {t("titles.it")}
          </h3>
        </div>
      </div>
      <div className="w-full sm:w-full md:w-4/12 full p-1 sm:p-2">
        <div className="bg-zinc-900 border-2  border-amber-400 dark:border-amber-400   rounded-xl flex flex-col justify-center m-1 items-center p-10 py-12 h-full">
        <BiBrightness  className="text-slate-100 text-[50px]"/>
          <h3 className=" mt-3 text-amber-400 dark:text-slate-100 text-center font-bold text-[20px]">
          {t("titles.md")}
          </h3>
        </div>
      </div>
    </>
  );
}
