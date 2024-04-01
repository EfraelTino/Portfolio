import React from "react";

export default function Cardwork({t}) {
  return (
    <>
      <div className=" w-100 sm:w-6/12 md:w-4/12 	">
        <div className="bg-zinc-950 rounded-xl flex flex-col justify-start m-1 items-start p-3">
          <img
            className="object-contain bg-zinc-950 h-full rounded-md"
            loading="lazy"
            src="/images/cozecha.jpg"
            alt="Logo"
          />
          <h3 className=" mt-3 text-amber-400 dark:text-slate-100 font-bold text-[20px] dark:hover:text-gray-400">
            Cozecha
          </h3>
          <p className="text-slate-100 dark:text-white hover:text-amber-300 text-[13px] text-start  italic transition-colors duration-300 dark:hover:text-gray-400">
            {t("subtitles.four")}
          </p>
          <p className="mt-2 text-secondary text-[14px] text-white">
          {t("descriptions.cozecha")}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-[12px] text-pink-600">#react</p>
            <p className="text-[12px] text-sky-600">#mysql</p>
            <p className="text-[12px] text-yellow-500">#javascript</p>
            <p className="text-[12px] text-gray-300">#tailwindcss</p>
            <p className="text-[12px] text-green-300">#jwtoken</p>
            <p className="text-[12px] text-orange-600">#express</p>
            <p className="text-[12px] text-green-500">#node.js</p>
          </div>
        </div>
      </div>
      <div className="w-100 sm:w-6/12 md:w-4/12 ful	">
        <div className="bg-zinc-950 rounded-xl flex flex-col justify-start m-1 items-start p-3">
          <img
            className="object-contain bg-zinc-950 h-full rounded-md"
            loading="lazy"
            src="/images/elearning.jpg"
            alt="Logo"
          />
          <h3 className=" mt-3 text-amber-400 dark:text-slate-100 font-bold text-[20px] dark:hover:text-gray-400">
          {t("titles.plataform")}
          </h3>
          <p className="text-slate-100 dark:text-white hover:text-amber-300 text-[13px] text-start  italic transition-colors duration-300 dark:hover:text-gray-400">
          {t("subtitles.eighty")}
          </p>
          <p className="mt-2 text-secondary text-[14px] text-white">
            
          {t("descriptions.elearning")}
          </p>
          <div className="mt-4 flex flex-wrap gap-1">
            <p className="text-[13px] text-pink-600">#php</p>
            <p className="text-[13px] text-sky-600">#mysql</p>
            <p className="text-[13px] text-yellow-500">#javascript</p>
            <p className="text-[13px] text-green-300">#jquery</p>
            <p className="text-[12px] text-orange-600">#bootstrap</p>
          </div>
        </div>
      </div>
      <div className=" w-100 sm:w-6/12 md:w-4/12 h-full	">
        <div className="bg-zinc-950 rounded-xl flex flex-col justify-start m-1 items-start p-3">
          <img
            className="object-contain bg-zinc-950 h-full rounded-md"
            loading="lazy"
            src="/images/transitionrun.png"
            alt="Logo TransitionsRun"
          />
          <h3 className=" mt-3 text-amber-400 dark:text-slate-100 font-bold text-[20px] dark:hover:text-gray-400">
            TransitionsRun
          </h3>
          <p className="text-slate-100 dark:text-white hover:text-amber-300 text-[13px] text-start  italic transition-colors duration-300 dark:hover:text-gray-400">
          {t("subtitles.seventounsond")}
          </p>
          <p className="mt-2 text-secondary text-[14px] text-white">
          {t("descriptions.transitionsrun")}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-[12px] text-pink-600">#php</p>
            <p className="text-[12px] text-sky-600">#mysql</p>
            <p className="text-[12px] text-yellow-500">#javascript</p>
            <p className="text-[12px] text-green-300">#bootstrap</p>
            <p className="text-[12px] text-orange-600">#restapi</p>
            <p className="text-[12px] text-green-500">#node.js</p>
          </div>
        </div>
      </div>
    </>
  );
}
