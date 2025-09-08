import * as React from "react";

import Layout from "../components/Layout";
import { SEOData } from "../components/SEOData";
import Pricing from "../components/Pricing";
import Feature from "../components/Feature";
import CaseStudies from "../components/CaseStudies";
import CallToAction from "../components/CallToAction";

import mapsImg from "../images/maps.png";
import sampul2Img from "../images/sampul2.jpg";
import sampul3Img from "../images/sampul3.jpg";
import sampul4Img from "../images/sampul4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function IndexPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="index"
        className="relative pt-14 pb-14 dark:bg-black overflow-hidden"
      >
        <div className="relative container mx-auto px-4 mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <img
                src={mapsImg}
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                alt="maps"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul2Img}
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                alt="sampul2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul3Img}
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                alt="sampul3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul4Img}
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
                alt="sampul4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* Pricing */}
      <Pricing />

      {/* Job Opportunities */}
      <section className="py-16 md:py-24 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-10">
            Bekerja di Jepang dengan proses yang sesuai dengan keahlian Anda
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "Bidang Perawat",
      details: [
        "Masa kontrak hingga 5 Tahun SSW 1.",
        "Seminggu 5-6 hari kerja.",
        "Kerja 8 hingga 12 jam per hari.",
        "Perkiraan Gaji: Rp15 Juta - Rp20 Juta per Bulan.",
      ],
    },
    {
      title: "Bidang Konstruksi",
      details: [
        "Masa kontrak hingga 5 Tahun SSW 1.",
        "Seminggu 5-6 hari kerja.",
        "8 jam per hari, istirahat 1 jam.",
        "Perkiraan Gaji: Rp15 Juta - Rp22 Juta per Bulan.",
      ],
    },
    {
      title: "Bidang Pertanian",
      details: [
        "Masa kontrak hingga 5 Tahun SSW 1.",
        "Seminggu 5 hari kerja.",
        "8 jam per hari, istirahat 1 jam.",
        "Perkiraan Gaji: Rp10 Juta - Rp20 Juta per Bulan.",
      ],
    },
    {
      title: "Bidang Perhotelan",
      details: [
        "Masa kontrak hingga 5 Tahun SSW 1.",
        "Seminggu 5-6 hari kerja.",
        "8 jam per hari, istirahat 1 jam.",
        "Perkiraan Gaji: Rp13 Juta - Rp25 Juta per Bulan.",
      ],
    },
    {
      title: "Bidang Pengolahan Makanan",
      details: [
        "Masa kontrak hingga 5 Tahun SSW 1.",
        "Seminggu 5 hari kerja.",
        "8 jam per hari, istirahat 1 jam.",
        "Perkiraan Gaji: Rp13 Juta - Rp18 Juta per Bulan.",
      ],
    },
    {
      title: "Bidang IT",
      details: [
        "Kontrak awal 2 tahun (visa perpanjang tiap tahun).",
        "Seminggu 5-6 hari kerja.",
        "Kerja 8 hingga 12 jam per hari.",
        "Perkiraan Gaji: Rp20 Juta - Rp30 Juta per Bulan (entry level).",
      ],
    },
  ].map((item, index) => (
    <article
      key={index}
      className="flex flex-col h-full space-y-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
    >
      {/* Header bidang */}
      <div className="flex items-center p-5 bg-white rounded-t-2xl shadow-inner border-b border-gray-200 dark:border-gray-700">
        <span className="bg-white text-blue-600 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center mr-5 shadow-md">
          {index + 1}
        </span>
        <h4 className="text-lg font-semibold text-blue-600">{item.title}</h4>
      </div>

      {/* Detail bidang */}
      <div className="p-6 flex-grow border border-gray-200/30 dark:border-gray-700/50 rounded-b-2xl">
        <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {item.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </article>
  ))}
</div>

        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}

export default IndexPage;
export const Head = () => <SEOData />;
