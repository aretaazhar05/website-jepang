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
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function IndexPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="index"
        className="relative py-14 dark:bg-black overflow-hidden"
      >
        <div className="relative container mx-auto mb-16">
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
                alt="Peta lokasi"
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul2Img}
                alt="Sampul 2"
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul3Img}
                alt="Sampul 3"
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul4Img}
                alt="Sampul 4"
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
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
        <div className="container mx-auto" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-8 md:w-1/2 lg:w-3/4">
            Bekerja di Jepang dengan proses yang sesuai dengan keahlian Anda
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                title: "Bidang Perawat",
                details: [
                  "Masa kontrak hingga 5 Tahun SSW 1.",
                  "Seminggu 5-6 hari kerja.",
                  "Kerja 8 hingga 12 jam per hari",
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
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-row items-start"
              >
                <span className="mr-4 bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
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
