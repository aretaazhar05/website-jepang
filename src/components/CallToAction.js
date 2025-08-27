import React from "react";

export default function CallToAction() {
  return (
    <section id="CallToAction" className="xs-p-y-16 md-p-y-24 bg-white dark-bg-gray-900">
      <div className="container container-lg">
        <div className="m-b-8">
          <h2>
           MANFAAT BEKERJA DI JEPANG
          </h2>
          <div>
                <p>
                  Terdapat Beberapa Manfaat Saat Bekerja di Jepang
                </p>
              </div>
            </div>
          </div>
    
          <div className="flex flex-column container container-lg">
            {/* CARD 1 */}
            <article className="card clickable shadow-gradient p-y-7 xs-p-x-6 radius-lg flex-row items-center w-100 xs-flex-wrap md-flex-no-wrap bg-white shadow-md m-b-7">
              <div className="flex items-center gap-4 m-b-4">
                
                <span className="badge border-gray-300 badge-sm"><b>1.</b></span>
              </div>
              <div className="flex flex-column md-w-40">
                <a href="https://twitter.com" className="h5 m-b-3">
                  Lingkungan Kerja Memadai
                </a>
                <p className="item-excerpt">
                  Pekerja Techo Shoku & Tokutei Ginou akan mendapatkan hak dan kewajiban yang sama dengan staf lokal. 
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
                    
                    <span className="badge border-gray-300 badge-sm">2.</span>
                  </div>
                  <a href="https://github.com" className="h5 m-b-3">
                    Gaji Relatif Lebih Tinggi
                  </a>
                  <p className="item-excerpt">
                    Standar gaji di Jepang relatif lebih tinggi dibandingkan rata rata gaji pekerja di Indonesia. Rata rata upah minimun pekerja di Jepang berkisar antara 15 hingga 25 juta per bulan untuk entry level .
                  </p>
                </article>
    
                {/* CARD 4 */}
                <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700">
                  <div className="flex items-center gap-4 m-b-4">
                   
                    <span className="badge border-gray-300 badge-sm">4.</span>
                  </div>
                  <a className="h5 m-b-3">
                    Tingkat Keamanan
                  </a>
                  <p className="item-excerpt">
                    Salah satu alasan orag asing memilih Jepang sebagai lokasi bekerja adalah karena tingkat keamananny yang sangat tinggi. Jepang dikenal didunia sebaga negara yang aman.
                  </p>
                </article>
              </div>
    
              {/* KOLOM KANAN */}
              <div className="flex flex-column xs-w-100 lg-w-65">
                {/* CARD 3 */}
                 <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700 m-b-7">
                  <div className="flex items-center gap-4 m-b-4">
                    
                    <span className="badge border-gray-300 badge-sm">3.</span>
                  </div>
                  <a href="https://github.com" className="h5 m-b-3">
                     Mengasah Skill Bahasa Jepang
                  </a>
                  <p className="item-excerpt">
                   Tinggal dan bersosalisasi langsung dengan orang lokal membuat kalian lebih mudah mengingat bahasa di negara tersebut. Manfaatkanlah kesempatan bekerja sekaligus untuk menasah kemampuan bahasa Jepang
                  </p>
                </article>
    
                {/* CARD 5 */}
                 <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700 m-b-7">
                  <div className="flex items-center gap-4 m-b-4">
                    
                    <span className="badge border-gray-300 badge-sm">5.</span>
                  </div>
                  <a href="https://github.com" className="h5 m-b-3">
                    Infrastruktur Memadai
                  </a>
                  <p className="item-excerpt">
                  Jepang adalah negara yang memiliki infrastrutur yang baik, sistem kesehatan yang menjamin, pendidikan berkualitas, dan transportasi yang efisien adalah sebagian dari faktor faktor yang mendukung kualitas hidup masyarakat Jepang
                  </p>
                </article>
    
                {/* CARD 6 */}
                <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700 m-b-7">
                  <div className="flex items-center gap-4 m-b-4">
                    
                    <span className="badge border-gray-300 badge-sm">6.</span>
                  </div>
                  <a href="https://github.com" className="h5 m-b-3">
                    Pesona 4 Musim
                  </a>
                  <p className="item-excerpt">
                   Jepang dikenal dengan indahnya bunga sakura, salju dan warna warni dedaunan di musim gugur. Kamu bisa memanfaatkan kesempatan bekerja sambil menikmati suasana 4 musim di Jepang.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
  );
}
