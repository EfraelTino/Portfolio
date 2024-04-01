import React from "react";
import { RiFileUserLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

export default function Descripcion() {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="flex flex-col sm:flex-row items-center gap-5 mx-auto w-11/12 md:max-w-4xl bg-white dark:bg-zinc-900 pb-8">
      <div className="relative w-44 h-44 bg-slate-400 dark:bg-zinc-700/60 border-8 border-white dark:border-zinc-500/80 shadow-lg rounded-full overflow-hidden">
        <span>
          <img
            alt="avatar"
            sizes="100vw"
            src="https://eduardorl.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.2d4d367d.png&w=1920&q=30"
            decoding="async"
            data-nimg="fill"
            className="rounded-full drop-shadow-2xl"
          />
        </span>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-3 ">
        <div className="flex flex-col items-left gap-2">
          <h1 className="text-2xl sm:text-6xl text-center sm:text-left font-bold text-zinc-900 dark:text-slate-100">
            Efrael Villanueva
          </h1>
          <p className="text-slate-900 text-sm text-center sm:text-start sm:text-lg dark:text-slate-100 max-w-xl rounded-2xl">
            {
              t("header.greating")
            }
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <div className="relative group/tooltip ">
            <div className="p-2.5 rounded-xl grid place-items-center bg-amber-200 dark:bg-amber-500">
              <div className="i-fa-pro:bullseye-arrow text-amber-700 dark:text-white"></div>
            </div>
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Looking for job
            </span>
          </div>
          <a
            href="https://github.com/EfraelTino"
            className="flex items-center text-[14px] sm:text-sm gap-1 bg-amber-200 hover:bg-opacity-80 dark:bg-amber-400 hover:dark:bg-opacity-90 text-zinc-900  py-2 px-4 rounded-lg font-semibold dark:text-zinc-900 hover:bg-amber-300 "
          >
            <AiFillGithub className="text-xl sm:text-lg z-auto"/>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/efrael/"
            className="flex items-center text-[14px] sm:text-sm gap-1 bg-amber-200 hover:bg-opacity-80 dark:bg-amber-400 hover:dark:bg-opacity-90 text-zinc-900 dark:text-zinc-900 py-2 px-4 rounded-lg font-semibold hover:bg-amber-300 "
          >

            <AiFillLinkedin className="text-xl sm:text-lg z-auto"/>
            LinkedIn
          </a>

          <a
            href="mailto:efrael2001@gmail.com"
            className="flex items-center text-[14px] sm:text-sm gap-1 bg-amber-200 hover:bg-opacity-80 dark:bg-amber-400 hover:dark:bg-opacity-90 text-zinc-900 dark:text-zinc-900 py-2 px-4 rounded-lg font-semibold hover:bg-amber-300"
          >
            <AiFillMail className="text-xl sm:text-lg z-auto" />
            Email
          </a>
          <a href="https://drive.google.com/file/d/1P_r9kBYRaAx74iOUj701g2A0nJkd-CF0/view?usp=sharing" target="_blanck"  className="flex items-center text-[14px] sm:text-sm gap-1 bg-amber-200 hover:bg-opacity-80 dark:bg-amber-400 hover:dark:bg-opacity-90 text-zinc-900 dark:text-zinc-9000 py-2 px-4 rounded-lg font-semibold hover:bg-amber-300 ">

            <RiFileUserLine />
            CV(ES)
          </a>
          <a href="https://drive.google.com/file/d/1CS3SHJm8BztpefNUSsMvwWT4cZKFFzzr/view?usp=sharing" target="_blanck" className="flex items-center text-[14px] sm:text-sm gap-1 bg-amber-200 hover:bg-opacity-80 dark:bg-amber-400 hover:dark:bg-opacity-90 text-zinc-900 dark:text-zinc-900 py-2 px-4 rounded-lg font-semibold hover:bg-amber-300 ">
            <RiFileUserLine  className="text-xl sm:text-lg z-auto"/>
            CV(EN)
          </a>
        </div>
      </div>
    </section>
  );
}
