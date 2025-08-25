import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function CaseStudies() {
  return (
    <section className="xs-p-y-16 md-p-y-24 bg-white dark-bg-gray-900">
      <div className="container container-lg">
        <div className="m-b-8 xs-w-100 md-w-50 lg-w-75">
          <h2>JEPANG KRISIS TENAGA KERJA</h2>
          <div>
            <p>
              Jepang membutuhkan tenaga kerja asing termasuk Indonesia untuk
              mengejar pertumbuhan ekonomi mereka.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-column container container-lg">
        {/* Card pertama */}
        <article className="card clickable shadow-gradient p-y-7 xs-p-x-6 radius-lg flex-row items-center w-100 xs-flex-wrap md-flex-no-wrap bg-white shadow-md m-b-7">
          <h3 className="visually-hidden">Banyak Usia Lanjut</h3>
          <a
            href="https://twitter.com"
            className="spread-link"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <div className="flex flex-column md-w-50">
            <div className="badge-group m-b-4">
              <span className="badge border-gray-300 badge-sm">
                <b>1. </b>
              </span>
            </div>
            <a href="https://twitter.com" className="h5 m-b-3">
              Banyak Usia Lanjut
            </a>
            <p className="item-excerpt">
              Usia lanjut di Jepang lebih banyak daripada usia muda, yang
              artinya pekerja usia muda sangat sedikit sekali.
            </p>
          </div>
        </article>

        {/* Row dengan dua kolom */}
        <div className="flex w-100 xs-flex-wrap md-flex-no-wrap">
          {/* Kolom kiri */}
          <div className="flex flex-column xs-w-100 lg-w-35 xs-m-b-7 md-m-b-0 md-m-r-7">
            {/* Card No. 2 */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700 m-b-7">
              <h3 className="visually-hidden"></h3>
              <a
                href="https://github.com"
                className="spread-link"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <div className="flex flex-column">
                <div className="badge-group m-b-4">
                  <span className="badge border-gray-300 badge-sm">2.</span>
                </div>
                <a href="https://github.com" className="h5 m-b-3">
                  Membutuhkan tenaga kerja
                </a>
                <p className="item-excerpt">
                  Jepang mengharapkan bantuan manpower atau tenaga kerja dari
                  berbagai negara, salah satunya dari Indonesia.
                </p>
              </div>
            </article>

            {/* Duplikat Card No. 2 */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700">
              <h3 className="visually-hidden"></h3>
              <a
                href="https://github.com"
                className="spread-link"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <div className="flex flex-column">
                <div className="badge-group m-b-4">
                  <span className="badge border-gray-300 badge-sm">4  .</span>
                </div>
                <a href="https://github.com" className="h5 m-b-3">
                  Pekerja Asing Sangat Penting 
                </a>
                <p className="item-excerpt">
                  Pekerja asing di anggap sangat penting bagi ekonomi Jepang karena mereka membantu mengisi kekurangan tenaga kerja yang parah karena penuaan dan angka kelahiran yang turun drastis.
                </p>
              </div>
            </article>
          </div>

          {/* Kolom kanan */}
          <div className="flex flex-column xs-w-100 lg-w-65">
            {/* Card pertama di kolom kanan */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 border-gray-200 dark-border-gray-700 m-b-6">
              <h3 className="visually-hidden">
                Helped Companyfgh integrating the new brand across channels
              </h3>
              <a
                href="https://producthunt.com"
                className="spread-link"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ></a>

              <div className="flex flex-column lg-w-50">
                <div className="badge-group m-b-4">
                  <span className="badge border-gray-300 badge-sm">
                    3.
                  </span>
                </div>
                <a href="https://producthunt.com" className="h5 m-b-3">
                  Kurang 1 Juta TK
                </a>
                <p className="item-excerpt">
                  Laporan media <b>reuters</b> pada juli 2024, Jepang menghadapi kekurangan hampir satu juta pekerja asing pada tahun 2040.
                </p>
              </div>
            </article>

            {/* Card kedua di kolom kanan */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 border-gray-200 dark-border-gray-700 m-b-6">
              <h3 className="visually-hidden">
                Companyxyz have increased purchase rate from returning visitors
              </h3>
              <a
                href="https://reddit.com"
                className="spread-link"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ></a>

              <div className="flex flex-column lg-w-50">
                <div className="badge-group m-b-4">
                  <span className="badge border-gray-300 badge-sm">
                    5.
                  </span>
                </div>
                <a href="https://reddit.com" className="h5 m-b-3">
                 Jumlah TK Asing Terus Meningkat
                </a>
                <p className="item-excerpt">
                  Jumlah pekerja asing di jepangmeningkat lebih dari empat kali lipat dalam 15 tahun terakhir menjadi 2.05 juta, atau sekitar 3% dari seluruh tenaga kerja, per oktober 2023
                </p>
              </div>
            </article>

            {/* Card ketiga di kolom kanan */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 border-gray-200 dark-border-gray-700">
              <h3 className="visually-hidden">
                Companyxyz have increased purchase rate from returning visitors
              </h3>
              <a
                href="https://reddit.com"
                className="spread-link"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ></a>

              <div className="flex flex-column lg-w-50">
                <div className="badge-group m-b-4">
                  <span className="badge border-gray-300 badge-sm">
                    6.
                  </span>
                </div>
                <a href="https://reddit.com" className="h5 m-b-3">
                 Kurang 3,8 Juta di 2035
                </a>
                <p className="item-excerpt">
                 Menurut media lokal jepang (JiJi pers) Jepang di proyeksikan akan menghadapi kekurangan tenaga kerja yang setara dengan 3,84 juta pekerja pada tahun 2035, yang berarti 17,75 juta jam kerja yang tidak terisi setiap hari, media lokal melaporkan.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
