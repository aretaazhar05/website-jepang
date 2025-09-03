import * as React from "react";

import Layout from "../components/Layout";
import { SEOData } from "../components/SEOData";
import Pricing from "../components/Pricing";
import Feature from "../components/Feature";
import CaseStudies from "../components/CaseStudies";
import CallToAction from "../components/CallToAction";

import mapsImg from "../images/maps.png";
import tkImg from "../images/TK.png";
import aretaImg from "../images/areta.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


function IndexPage() {
  return (
    <Layout>
      {/* Hero Section */}
              <section id="index" className="relative p-t-14 p-b-14 dark-bg-black overflow-hidden">
          {/* Konten Utama */}
          <div className="relative container container-xl m-b-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded-lg shadow-lg"
            >
              <SwiperSlide>
                <img 
                  src={mapsImg} 
                  className="w-full h-auto object-contain rounded-lg shadow-lg" 
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src={tkImg} 
                  className="w-full h-auto object-contain rounded-lg shadow-lg" 
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src={aretaImg}  
                  className="w-full h-auto object-contain rounded-lg shadow-lg" 
                />
              </SwiperSlide>
            </Swiper>
          </div>

       {/* Visi & Misi Section */}
<div className="container container-xl all-center">
  <div className="grid xs-grid-cols-1 sm-grid-cols-2 gap-6 items-stretch">
    {/* Visi */}
    <article className="card p-7 bg-white dark-bg-gray-700 flex flex-col justify-between">
      <div>
        <h3 className="h5 m-b-2">🧭 Visi</h3>
        <p className="subtitle">
          Menjadi penyelenggara pendidikan bahasa Jepang unggulan skala
          internasional yang berkontribusi pada pengembangan SDM dan
          penyebaran dakwah Islam.
        </p>
      </div>
    </article>

    {/* Misi */}
    <article className="card p-7 bg-white dark-bg-gray-700 flex flex-col justify-between">
      <div>
        <h3 className="h5 m-b-2 font-bold">🎯 Misi</h3>
        <ul className="subtitle list-disc pl-5">
          <li>- Menggali potensi bahasa Jepang dan skill unik siswa.</li>
          <li>
            - Membimbing siswa di dalam maupun luar kelas terkait pembelajaran
              bahasa Jepang dan kehidupan di Jepang.
          </li>
          <li>- Mencetak resource yang mampu berdakwah di Jepang.</li>
          <li> Mencetak resource yang mampu bersaing di era global.</li>
        </ul>
      </div>
    </article>
  </div>
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

          <div className="grid xs-grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-6 m-b-10">
            {[
              {
                title: "Bidang Perawat",
                details: [
                  "Masa kontrak hingga 5 Tahun SSW 1.",
                  "Seminggu 5-6 hari kerja.",
                  "Kerja 8 hingga 12 jam per hari",
                  "Perkiraan Gaji: Rp15 Juta - Rp20 Juta per Bulan."
                ]
              },
              {
                title: "Bidang Konstruksi",
                details: [
                  "Masa kontrak hingga 5 Tahun SSW 1.",
                  "Seminggu 5-6 hari kerja.",
                  "8 jam per hari, istirahat 1 jam.",
                  "Perkiraan Gaji: Rp15 Juta - Rp22 Juta per Bulan."
                ]
              },
              {
                title: "Bidang Pertanian",
                details: [
                  "Masa kontrak hingga 5 Tahun SSW 1.",
                  "Seminggu 5 hari kerja.",
                  "8 jam per hari, istirahat 1 jam.",
                  "Perkiraan Gaji: Rp10 Juta - Rp20 Juta per Bulan."
                ]
              },
              {
                title: "Bidang Perhotelan",
                details: [
                  "Masa kontrak hingga 5 Tahun SSW 1.",
                  "Seminggu 5-6 hari kerja.",
                  "8 jam per hari, istirahat 1 jam.",
                  "Perkiraan Gaji: Rp13 Juta - Rp25 Juta per Bulan."
                ]
              },
              {
                title: "Bidang Pengolahan Makanan.",
                details: [
                  "Masa kontrak hingga 5 Tahun SSW 1.",
                  "Seminggu 5 hari kerja.",
                  "8 jam per hari, istirahat 1 jam.",
                  "Perkiraan Gaji: Rp13 Juta - Rp18 Juta per Bulan."
                ]
              },
              {
                title: "Bidang IT",
                details: [
                  "Kontrak awal 2 tahun (visa perpanjang tiap tahun).",
                  "Seminggu 5-6 hari kerja.",
                  "Kerja 8 hingga 12 jam per hari.",
                  "Perkiraan Gaji: Rp20 Juta - Rp30 Juta per Bulan (entry level)."
                ]
              }
            ].map((item, index) => (
              <article
                key={index}
                className="card p-6 bg-white dark-bg-gray-800 flex flex-row items-start"
              >
                <span className="badge-icon badge-icon-md m-r-4 bg-blue-100 font-semibold font-size-lg">
                  {index + 1}
                </span>
                <div className="flex flex-column">
                  <h3 className="h5 m-b-2">{item.title}</h3>
                  <ul className="subtitle list-disc pl-5">
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
