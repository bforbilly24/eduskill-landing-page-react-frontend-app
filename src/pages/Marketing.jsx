import React, { useEffect } from "react";
import { market1, market2 } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Marketing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="lg:mb-[50px] md:mb-[50px] mb-[30px] lg:flex md:flex justify-center lg:mx-0 md:mx-0 mx-[20px]">
      <div className="lg:section md:section">
        <div className="lg:flex md:flex xl:justify-between lg:justify-start md:justify-start justify-start">
          <div className="xl:w-[700px] lg:w-full md:w-full w-full lg:h-72 md:h-72 h-full flex-col justify-start items-start lg:gap-6 md:gap-6 gap-3 inline-flex font-['Poppins']">
            <div
              data-aos="fade-right"
              className="lg:mr-20 md:mr-20 mr-14 text-orange-500 lg:text-3xl md:text-3xl text-lg font-bold lg:leading-10 md:leading-10 leading-1 lg:tracking-wide md:tracking-wide tracking-normal"
            >
              Mengapa Eduskill menjadi Pilihan Terbaik untuk Upskilling?
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className=" text-black lg:text-lg md:text-lg text-base text-start font-light leading-normal tracking-tight"
            >
              Eduskill Berfokus pada bidang Pemrograman dan AI berbasis Real
              Project Industri
              <br />
              <br />
              Di Dukung dengan Mentorbot yang bisa di akses kapan saja, serta
              kurikulum berbasis praktek
            </div>
          </div>

          <div className="xl:w-[550px] lg:w-full md:w-full w-full flex-col lg:gap-6 md:gap-6 gap-3 inline-flex items-start lg:mt-0 md:mt-0 mt-8">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="w-full lg:h-40 md:h-40 h-32 lg:px-4 md:px-4 px-3 py-9 bg-white rounded-2xl border border-neutral-300 justify-start items-center inline-flex"
            >
              <div className="flex justify-center items-center lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 lg:mr-[25px] md:mr-[25px] mr-3 bg-emerald-200 rounded-full">
                <img
                  src={market1}
                  alt="real_cases"
                  className="lg:w-14 md:w-14 w-9 lg:h-14 md:h-14 h-9 rounded-full"
                />
              </div>{" "}
              <div className="flex-col justify-start items-st4art gap-1 inline-flex font-['Poppins']">
                <div className="text-teal-600 lg:text-xl md:text-xl text-base font-bold lg:leading-9 md:leading-9 leading-7 tracking-tight">
                  Real Cases, Real Projects
                </div>
                <div className="italic xl:w-[26rem] lg:w-96 md:w-96 w-[230px] text-neutral-500 lg:text-base md:text-base text-xs font-normal lg:leading-7 md:leading-7 leading-5 tracking-tight">
                  Selain teori, Eduskill juga menawarkan real cases & real
                  projects guna memberikan pengalaman praktik dunia kerja yang
                  nyata.
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="w-full lg:h-40 md:h-40 h-32 lg:px-4 md:px-4 px-3 py-9 bg-white rounded-2xl border border-neutral-300 justify-start items-center inline-flex"
            >
              <div className="flex justify-center items-center lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 lg:mr-[25px] md:mr-[25px] mr-3 bg-emerald-200 rounded-full">
                <img
                  src={market2}
                  alt="collaborative"
                  className="lg:w-14 md:w-14 w-9 lg:h-14 md:h-14 h-9 rounded-full"
                />
              </div>
              <div className="flex-col justify-start items-start gap-1 inline-flex font-['Poppins']">
                <div className="text-teal-600 lg:text-xl md:text-xl text-base font-bold lg:leading-9 md:leading-9 leading-7 tracking-tight">
                  Collaborative-Based Learning{" "}
                </div>
                <div className="italic xl:w-[26rem] lg:w-96 md:w-96 w-[230px] text-neutral-500 lg:text-base md:text-base text-xs font-normal lg:leading-7 md:leading-7 leading-5 tracking-tight">
                  Kolaborasi aktif dalam simulasi nyata melalui project
                  kelompok.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
