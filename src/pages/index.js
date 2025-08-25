import * as React from "react";

import Layout from "../components/Layout";
import { SEOData } from "../components/SEOData";
import Pricing from "../components/Pricing";
import Feature from "../components/Feature";
import CaseStudies from "../components/CaseStudies";
import CallToAction from "../components/CallToAction";

function IndexPage() {
  return (
    <Layout>
      <section className="p-t-14 p-b-14 dark-bg-black">
        <div className="container container-xl m-b-16">
          <div className="section-title all-center">
            
            <h2 className="h1 m-b-6 md-w-75">
              Berani Ambil Langkah Pertama
            </h2>
            <div className="md-w-50 m-b-7">
              <h3 className="h6 font-medium line-h-lg">
                Jelang Bisa Jadi Awal Perubahan Hidupmu
              </h3>
            </div>

            <a
              href="https://ravenbrightdesign.gumroad.com"
              className="btn dark-bg-blue-500 btn-lg shadow-lg radius-sm"
              role="button"
              aria-label="Download Gatsby template"
            >
              Download Gatsby template
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="m-l-3 ai ai-Download"
              >
                <title>Download template icon</title>
                <path d="M12 15V3m0 12l-4-4m4 4l4-4"></path>
                <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="container container-xl all-center">
          <p className="subtitle uppercase m-b-6">
           
          </p>
          <div className="grid xs-grid-cols-2 sm-grid-cols-3 lg-grid-cols-6 gap-10 all-center black dark-white xs-m-l-0 md-m-x-0">
          </div>      
          <div className="grid xs-grid-cols-1 sm-grid-cols-2 lg-grid-cols-3 gap-6">
            <article className="card p-7 bg-white dark-bg-gray-700 dark-bg-gray-700 h-100 justify-center">
             
              <div className="flex flex-column">
                <h3 className="h5 m-b-2">Visi</h3>
                <p className="subtitle">
                  Menjadi penyelenggara pendidikan bahasa jeapng unggulan skala internasional yang berkontribusi pada pengembangan SDM dan penyebaran dakwah Islam.
                </p>
              </div>
            </article>
            <article className="card p-7 bg-white dark-bg-gray-700 h-100">
             
              <div className="flex flex-column">
                <h3 className="h5 m-b-2"></h3>
                <p className="subtitle">
                 
                </p>
              </div>
            </article>
            <article className="card p-7 bg-white dark-bg-gray-700 m-b-4 h-100">
              
              <div className="flex flex-column">
                <h3 className="h5 m-b-2 font-bold">
                  Misi
                </h3>
                <p className="subtitle">
                 <b>1. </b>Menggali potensi bahasa jepang dan skill unik siswa.
                 <div>
                  <b>2. </b> Membimbing siswa di dalam maupu luar kelas terkait pembelajaran bahasa jepang dan kehidupan di jepang.
                 </div>
                 <div>
                  <b>3. </b> Mencetak resource yang mampu berdakwah di jepang.
                 </div>
                 <div>
                  <b>4. </b> Mencetak resource yang mampu bersaing di era gobal.
                 </div>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <CaseStudies />
      <Pricing />
      <section className="xs-p-y-16 md-p-y-24 bg-blue-50 dark-bg-gray-900">
        <div
          className="container container-xl"
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <h3 className="h2 m-b-8 xs-w-100 md-w-50 lg-w-75">
            Bekerja di jepang dengan proses yang sesuai dengan keahlian anda{" "}
          </h3>

          <div className="grid xs-grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-6  m-b-10">
            <article className="card p-6 bg-white dark-bg-gray-800 dark-bg-gray-700 flex flex-row items-start justify-start">
              <span className="badge-icon badge-icon-md m-b-2 bg-blue-100 dark-bg-gray-700 m-r-4 font-semibold font-size-lg blue-700 dark-blue-300">
                1
              </span>
              <div className="flex flex-column">
                <h3 className="h5 m-b-2">Bidang Perawat</h3>
                <p className="subtitle">
                 <div>
                  - masa kontrak hingga 5 Tahun SSW 1
                 </div>
                 <div>
                  - Seminggu 5-6 hari kerja
                 </div>
                 <div>
                  - Kerja 8 hingga 12 jam per hari
                 </div>
                 <div>
                  - Perkiraan Gaji : Rp15 Juta - Rp20 Juta per Bulan
                 </div>
                
                </p>
              </div>
            </article>
            <article className="card p-6 bg-white dark-bg-gray-800 dark-bg-gray-700 flex flex-row items-start justify-start">
              <span className="badge-icon badge-icon-md m-b-2 bg-blue-100 dark-bg-gray-700 m-r-4 font-semibold font-size-lg blue-700 dark-blue-300">
                2
              </span>
              <div className="flex flex-column">
                <h3 className="h5 m-b-2">Bidang <div>Konstruksi</div></h3>
                <p className="subtitle">
                   <div>
                  - Masa Kontrak hingga 5 Tahun SSW 1
                 </div>
                 <div>
                  - Seminggu 5-6 hari kerja
                 </div>
                 <div>
                  - 8 jam perhari. Istirahat 1 jam
                 </div>
                 <div>
                  - Perkiraan Gaji : Rp15 Juta - Rp22 Juta per bulan
                 </div>
                </p>
              </div>
            </article>
            <article className="card p-6 bg-white dark-bg-gray-800 dark-bg-gray-700 flex flex-row items-start justify-start">
              <span className="badge-icon badge-icon-md m-b-2 bg-blue-100 dark-bg-gray-700 m-r-4 font-semibold font-size-lg blue-700 dark-blue-300">
                3
              </span>
              <div className="flex flex-column">
                <h3 className="h5 m-b-2">Bidang Pertanian</h3>
                <p className="subtitle">
                   <div>
                  - masa kontrak hingga 5 Tahun SSW 1
                 </div>
                 <div>
                  - Seminggu 5 hari kerja
                 </div>
                 <div>
                  - 8 Jam perhai. Istirahat 1 jam
                 </div>
                 <div>
                  - Perkiraan Gaji : Rp10 Juta - Rp20 Juta per Bulan
                 </div>
                </p>
              </div>
            </article>
            <article className="card p-6 bg-white dark-bg-gray-800 dark-bg-gray-700 flex flex-row items-start justify-start">
              <span className="badge-icon badge-icon-md m-b-2 bg-blue-100 dark-bg-gray-700 m-r-4 font-semibold font-size-lg blue-700 dark-blue-300">
                4
              </span>
              <div className="flex flex-column">
                <h3 className="h5 m-b-2">Bidang Perhotelan</h3>
                <p className="subtitle">
                    <div>
                  - masa kontrak hingga 5 Tahun SSW 1
                 </div>
                 <div>
                  - Seminggu 5-6 hari kerja
                 </div>
                 <div>
                  - 8 Jam perhai. Istirahat 1 jam
                 </div>
                 <div>
                  - Perkiraan Gaji : Rp13 Juta - Rp25 Juta per Bulan
                 </div>
                </p>
              </div>
            </article>
            <article className="card p-6 bg-white dark-bg-gray-800 dark-bg-gray-700 flex flex-row items-start justify-start">
              <span className="badge-icon badge-icon-md m-b-2 bg-blue-100 dark-bg-gray-700 m-r-4 font-semibold font-size-lg blue-700 dark-blue-300">
                5
              </span>
              <div className="flex flex-column">
                <h3 className="h5 m-b-2">Bilang Pengolahan Makanan</h3>
                <p className="subtitle">
                    <div>
                  - masa kontrak hingga 5 Tahun SSW 1
                 </div>
                 <div>
                  - Seminggu 5 hari kerja
                 </div>
                 <div>
                  - 8 Jam perhai. Istirahat 1 jam
                 </div>
                 <div>
                  - Perkiraan Gaji : Rp13 Juta - Rp18 Juta per Bulan
                 </div>
                </p>
              </div>
            </article>
            <article className="card p-6 bg-white dark-bg-gray-800 dark-bg-gray-700 flex flex-row items-start justify-start">
              <span className="badge-icon badge-icon-md m-b-2 bg-blue-100 dark-bg-gray-700 m-r-4 font-semibold font-size-lg blue-700 dark-blue-300">
                6
              </span>
              <div className="flex flex-column">
                <h3 className="h5 m-b-2">Bidang IT</h3>
                <p className="subtitle">
                    <div>
                  - Kontrak awal 2 tahun (visa perpanjang tiap tahun)
                 </div>
                 <div>
                  - Seminggu 5-6 hari kerja
                 </div>
                 <div>
                  - kerja 8 jam hingga 12 jam perhari
                 </div>
                 <div>
                  - Perkiraan Gaji : Rp20 Juta - Rp30 Juta per Bulan untuk entry level
                 </div>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
}

export default IndexPage;
export const Head = () => <SEOData />;
