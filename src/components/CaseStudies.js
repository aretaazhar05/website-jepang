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
        {/* CARD 1 */}
        <article className="card clickable shadow-gradient p-y-7 xs-p-x-6 radius-lg flex-row items-center w-100 xs-flex-wrap md-flex-no-wrap bg-white shadow-md m-b-7">
          <div className="flex items-center gap-4 m-b-4">
            <StaticImage
              src="../images/old-people.png"
              alt="Banyak Usia Lanjut"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="badge border-gray-300 badge-sm"><b>1.</b></span>
          </div>
          <div className="flex flex-column md-w-50">
            <a href="https://twitter.com" className="h5 m-b-3">
              Banyak Usia Lanjut
            </a>
            <p className="item-excerpt">
              Usia lanjut di Jepang lebih banyak daripada usia muda,
              yang artinya pekerja usia muda sangat sedikit sekali.
            </p>
          </div>
        </article>

        {/* ROW 2 KOLOM */}
        <div className="flex w-100 xs-flex-wrap md-flex-no-wrap">
          {/* KOLOM KIRI */}
          <div className="flex flex-column xs-w-100 lg-w-35 xs-m-b-7 md-m-b-0 md-m-r-7">
            
            {/* CARD 2 */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700 m-b-7">
              <div className="flex items-center gap-4 m-b-4">
                <StaticImage
                  src="../images/workers.png"
                  alt="Membutuhkan tenaga kerja"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="badge border-gray-300 badge-sm">2.</span>
              </div>
              <a href="https://github.com" className="h5 m-b-3">
                Membutuhkan tenaga kerja
              </a>
              <p className="item-excerpt">
                Jepang mengharapkan bantuan manpower atau tenaga kerja dari
                berbagai negara, salah satunya dari Indonesia.
              </p>
            </article>

            {/* CARD 4 */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700">
              <div className="flex items-center gap-4 m-b-4">
                <StaticImage
                  src="../images/global.png"
                  alt="Pekerja Asing Sangat Penting"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="badge border-gray-300 badge-sm">4.</span>
              </div>
              <a href="https://github.com" className="h5 m-b-3">
                Pekerja Asing Sangat Penting
              </a>
              <p className="item-excerpt">
                Pekerja asing di anggap sangat penting bagi ekonomi Jepang
                karena mereka membantu mengisi kekurangan tenaga kerja
                yang parah karena penuaan dan angka kelahiran yang turun drastis.
              </p>
            </article>
          </div>

          {/* KOLOM KANAN */}
          <div className="flex flex-column xs-w-100 lg-w-65">
            {/* CARD 3 */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 border-gray-200 dark-border-gray-700 m-b-6">
              <div className="flex items-center gap-4 m-b-4">
                <StaticImage
                  src="../images/lack.png"
                  alt="Kurang 1 Juta TK"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="badge border-gray-300 badge-sm">3.</span>
              </div>
              <div className="flex flex-column lg-w-50">
                <a href="https://producthunt.com" className="h5 m-b-3">
                  Kurang 1 Juta TK
                </a>
                <p className="item-excerpt">
                  Laporan media <b>reuters</b> pada juli 2024, Jepang menghadapi kekurangan hampir satu juta pekerja asing pada tahun 2040.
                </p>
              </div>
            </article>

            {/* CARD 5 */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 border-gray-200 dark-border-gray-700 m-b-6">
              <div className="flex items-center gap-4 m-b-4">
                <StaticImage
                  src="../images/increase.png"
                  alt="Jumlah TK Asing Terus Meningkat"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="badge border-gray-300 badge-sm">5.</span>
              </div>
              <div className="flex flex-column lg-w-50">
                <a href="https://reddit.com" className="h5 m-b-3">
                  Jumlah TK Asing Terus Meningkat
                </a>
                <p className="item-excerpt">
                  Jumlah pekerja asing di Jepang meningkat lebih dari empat kali
                  lipat dalam 15 tahun terakhir menjadi 2.05 juta, atau sekitar
                  3% dari seluruh tenaga kerja, per Oktober 2023
                </p>
              </div>
            </article>

            {/* CARD 6 */}
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 border-gray-200 dark-border-gray-700">
              <div className="flex items-center gap-4 m-b-4">
                <StaticImage
                  src="../images/projection.png"
                  alt="Kurang 3,8 Juta di 2035"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="badge border-gray-300 badge-sm">6.</span>
              </div>
              <div className="flex flex-column lg-w-50">
                <a href="https://reddit.com" className="h5 m-b-3">
                  Kurang 3,8 Juta di 2035
                </a>
                <p className="item-excerpt">
                  Menurut media lokal Jepang (JiJi Pers) Jepang diproyeksikan
                  akan menghadapi kekurangan tenaga kerja yang setara dengan
                  3,84 juta pekerja pada tahun 2035, yang berarti 17,75 juta
                  jam kerja yang tidak terisi setiap hari.
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
