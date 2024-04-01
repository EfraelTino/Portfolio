import React from "react";
import {  AiFillGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";
export default function Conocimiento() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <section className="mx-auto w-11/12 md:max-w-4xl mb-10 relative z-0">
        <span className="hash-span" id="work">
          &nbsp;
        </span>
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-start text-amber-400 dark:text-yellow-500">
          {t("generals.areas")}
          </p>
          <h2 className="text-zinc-900 dark:text-slate-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-start">
          {t("titles.knowledge")}
          </h2>
          <div className="flex gap-4 sm:gap-8 md:gap-10 justify-around items-center flex-wrap flex-row">
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/html5.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/css3.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/js.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                />
              </div>
            </div>

            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/node.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/rest.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/mysql.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
                />
              </div>
            </div>
            <div className="basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 248 31"
                  className="text-slate-900 dark:text-white w-auto h-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                    fill="#38bdf8"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://sass-lang.com/assets/img/logos/logo.svg"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/bootstrap.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/git.png"
                />
              </div>
            </div>
            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <AiFillGithub className="dark:text-white text-zinc-900 text-[60px]" />
              </div>
            </div>

            <div className=" basis-2/12 sm:basis-1/12">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src="https://chandanachaitanya.github.io/Images/skills/vscode.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-11/12 md:max-w-4xl   relative z-0">
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-start text-amber-400 dark:text-yellow-500">
          {t("generals.study")}
          </p>
          <h2 className="text-zinc-900 dark:text-slate-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-start">
          {t("titles.education")}
          </h2>
          <div className="bg-zinc-950 rounded-xl flex flex-col  m-1 items-center p-6 w-full sm:w-5/12">
            <div className="basis-full sm:basis-1/4 flex justify-center">
              <img
                className="bg-zinc-950 w-2/3"
                src="https://iestphuanta.edu.pe/wp-content/uploads/2021/12/logo_tecno.png"
                loading="lazy"
                alt="Logo IESTP"
              />
            </div>
            <div className="basis-full sm:basis-3/4	pt-4">
              <p className="font-bold text-center text-[16px] sn:text[30px] text-green-500">
              {t("titles.it")}
              </p>
              <p className="text-center">
                <small className="font-normal text-slate-100 text-center text-[14px] sm:text-[16px] leading-3">
                  Instituto de Educación Superior Tenológico Público "Huanta"
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 mx-auto w-11/12 md:max-w-4xl  relative z-0">
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-start text-amber-400 dark:text-yellow-500">
          {t("generals.jobs")}
          </p>
          <h2 className="text-zinc-900 dark:text-slate-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-start">
            {t("titles.experience")}
          </h2>
          <div className="flex flex-row flex-wrap f-full">
            <div className="basis-full sm:basis-6/12 md:basis-1/3 h-full">
            <div className="bg-zinc-950 rounded-xl flex flex-col sm:flex-col m-1 items-start sm:items-center p-4 h-full">
                <div className="basis-full sm:basis-1/4 flex justify-center">
                  <img
                    className="bg-gray-950 w-full rounded-md"
                    src="http://monoagencyma.com/wp-content/uploads/2020/06/Mesa-de-trabajo-1-copia@2x-8.png"
                    loading="lazy"
                    alt="Logo Mono"
                  />
                </div>
                <div className="basis-full sm:basis-3/4	pt-4">
                  <p className="font-bold text-start text-[16px] sn:text[30px] text-cyan-400 flex gap-2 items-center">
                    <img
                      src="https://em-content.zobj.net/source/google/387/flag-peru_1f1f5-1f1ea.png"
                      loading="lazy"
                      alt="emoji-timeline"
                      width="28"
                      height="28"
                    />{" "}
                    Mono Agency
                  </p>
                  <div className="text-start">
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.posicion")}{": "}
                      </strong>
                      <small className="text-[14px] text-green-300">

                        {t("titles.fs")}
                      </small>
                      <br />
                    </>
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.date")}{": "}
                      </strong>
                      <small className="text-[14px] text-green-300">
                        01/06/2022 - {t("descriptions.present")}
                      </small>
                      <br />
                    </>
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.tec")}:{" "}
                      </strong>
                      <div className=" flex flex-wrap gap-1">
                        <p className="text-[13px] text-pink-600">#php</p>
                        <p className="text-[13px] text-sky-600">#mysql</p>
                        <p className="text-[13px] text-yellow-500">#javascript</p>
                        <p className="text-[13px] text-green-300">#jquery</p>
                        <p className="text-[12px] text-orange-600">#bootstrap</p>
                      </div>
                      <br />
                    </>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-6/12 md:basis-1/3 h-full">
              <div className="bg-zinc-950 rounded-xl flex flex-col sm:flex-col m-1 items-start sm:items-center p-4 h-full">
                <div className="basis-full  flex justify-center">
                  <img
                    className="bg-gray-950 w-full rounded-md"
                    src="https://winayagency.com/wp-content/uploads/2023/06/WINAY-LOGO-PNG.png"
                    loading="lazy"
                    alt="Logo Wiñay"
                  />
                </div>
                <div className="basis-full sm:basis-3/4	pt-11">
                  <p className="font-bold text-start text-[16px] sn:text[30px] text-fuchsia-600 flex gap-2 items-center">
                    <img
                      src="https://em-content.zobj.net/source/google/387/flag-peru_1f1f5-1f1ea.png"
                      loading="lazy"
                      alt="emoji-timeline"
                      width="28"
                      height="28"
                    />{" "}
                    Wiñay Agency
                  </p>
                  <div className="text-start">
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.posicion")}{": "}
                      </strong>
                      <small className="text-[14px] text-green-300">
                      {t("titles.fs")}
                      </small>
                      <br />
                    </>
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.date")}{": "}
                      </strong>
                      <small className="text-[14px] text-green-300">
                        01/06/2022 - {t("descriptions.present")}
                      </small>
                      <br />
                    </>
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.tec")}:{" "}
                      </strong>
                      <div className=" flex flex-wrap gap-1">
                        <p className="text-[13px] text-pink-600">#react</p>
                        <p className="text-[13px] text-sky-600">#mysql</p>
                        <p className="text-[13px] text-yellow-500">#javascript</p>
                        <p className="text-[13px] text-green-300">#node</p>
                        <p className="text-[12px] text-orange-600">#tailwindcss</p>
                      </div>
                      <br />
                    </>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-6/12 md:basis-1/3 h-full">
            <div className="bg-zinc-950 rounded-xl flex flex-col sm:flex-col m-1 items-start sm:items-center p-4 h-full">
                <div className="basis-full sm:basis-1/4 flex justify-center">
                  <img
                    className="bg-zinc-950 w-2/3 "
                    src="/images/diri_logo_p.webp"
                    loading="lazy"
                    alt="Logo DiRi"
                  />
                </div>
                <div className="basis-full sm:basis-3/4	pt-4">
                  <div className="font-bold text-start text-[16px] sn:text[30px] text-violet-600 flex gap-2 items-center pt-3">
                    <img
                      src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/1f1e8-1f1f4.svg"
                      alt="Google (Noto Color Emoji - Unicode 15.1)"
                      width="28"
                      height="28"
                    />{" "}
                    DiRi Soluciones
                  </div>
                  <div className="text-start">
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.posicion")}:{" "}
                      </strong>
                      <small className="text-[14px] text-green-300">
                      {t("titles.fs")}
                      </small>
                      <br />
                    </>
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.date")}:{" "}
                      </strong>
                      <small className="text-[14px] text-green-300">
                        04/02/2022 - 04/08/2022
                      </small>
                      <br />
                    </>
                    <>
                      <strong className="text-slate-100 font-bold text-[14px]">
                      {t("subtitles.tec")}:{" "}
                      </strong>
                      <div className=" flex flex-wrap gap-1">
                        <p className="text-[13px] text-pink-600">#react</p>
                        <p className="text-[13px] text-sky-600">#mysql</p>
                        <p className="text-[13px] text-yellow-500">#javascript</p>
                        <p className="text-[13px] text-green-300">#node</p>
                        <p className="text-[12px] text-orange-600">#tailwindcss</p>
                      </div>
                      <br />
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
