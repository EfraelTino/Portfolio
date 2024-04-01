import React from "react";
import Cardwork from "./Cardwork";
import { useTranslation } from "react-i18next";
export default function Projects() {
  const [t, i18n] = useTranslation("global");
  return (
    <section className="flex flex-col sm:flex-row items-center gap-5 mx-auto w-11/12 md:max-w-4xl bg-white dark:bg-zinc-900 pb-8">
      <div>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-start text-orange-600 dark:text-yellow-500">
      {t("generals.areas")}
        </p>

        <h2 className="text-2xl sm:text-6xl text-letf font-black text-zinc-900 dark:text-slate-100">
        {t("titles.projects")}
        </h2>
        <p className="text-slate  sm:text-lg md:text-base font-light mt-3 dark:text-slate-100 ">
        {t("descriptions.projects")}
        </p>
        <div className=" justify-between flex  flex-wrap py-8">
          <Cardwork t={t} />
        </div>
      </div>
    </section>
  );
}
