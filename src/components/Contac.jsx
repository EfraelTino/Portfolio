import React from "react";
import { RiFileUserLine } from 'react-icons/ri';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function () {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section className="w-11/12 md:max-w-4xl mx-auto relative z-0 mt-16 ">
        <div className="flex-[0.75]  rounded-2xl">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-start text-orange-600 dark:text-yellow-500">
            Get in touch
          </p>
          <h2 className="text-zinc-900 dark:text-slate-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-start">Contact.</h2>
            <div className="flex gap-4 my-2">
                <a href="" className="text-[36px] text-zinc-900 dark:text-amber-400 hover:dark:text-opacity-80">
                    <RiFileUserLine />
                </a>
                <a href="https://www.linkedin.com/in/efrael/" className="text-[36px] text-zinc-900 dark:text-amber-400 hover:dark:text-opacity-80">
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/EfraelTino" className="text-[36px] text-zinc-900 dark:text-amber-400 hover:dark:text-opacity-80">
                    <AiFillGithub />
                </a>
                <a href="mailto:efrael2001@gmail.com" className="text-[36px] text-zinc-900 dark:text-amber-400 hover:dark:text-opacity-80">
                    <AiFillMail  />
                </a>
            </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto relative z-0 mt-10 pb-10">
        <div className="flex justify-center">
            <small className="dark:text-slate-100 text-slate">
            © Copyrigth 2022 - {t("descriptions.made")} ❤️  {t("descriptions.by")}  <a href="https://efrael.com/">Efrael</a>	</small>
        </div>
      </section>
    </>
  );
}
