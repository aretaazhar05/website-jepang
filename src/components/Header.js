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
        className="relative p-t-14 p-b-14 dark-bg-black overflow-hidden"
      >
        {/* Konten Utama */}
        <div className="relative container container-xl m-b-16">
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
                className="w-full h-[200px] object-fill rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul2Img}
                className="w-full h-[200px] object-fill rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul3Img}
                className="w-full h-[200px] object-fill rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sampul4Img}
                className="w-full h-[200px] object-fill rounded-lg shadow-lg"
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
      <section className="xs-p-y-16 md-p-y-24 bg-blue-50 dark-bg-gray-900">
        <div className="container container-xl" data-aos="fade-up">
          <h3 className="h2 m-b-8 xs-w-100 md-w-50 lg-w-75">
            Bekerja di Jepang dengan proses yang sesuai dengan keahlian Anda
          </h3>

          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 m-b-10 items-stretch">
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
                title: "Bidang Pengolahan Makanan.",
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
                className="card p-6 bg-white dark-bg-gray-800 flex flex-col h-full rounded-xl shadow-md max-w-sm w-full"
              >
                {/* Header: nomor + judul */}
                <div className="flex items-center mb-4">
                  <span className="badge-icon badge-icon-md bg-blue-100 font-semibold font-size-lg flex items-center justify-center rounded-full w-8 h-8 mr-3">
                    {index + 1}
                  </span>
                  <h3 className="h5">{item.title}</h3>
                </div>

                {/* List detail */}
                <ul className="subtitle list-disc pl-5 space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
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
