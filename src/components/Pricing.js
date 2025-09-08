import React from "react";
import Layout from "../components/Layout";
import { SEOData } from "../components/SEOData";
import Blog from "../components/Blog";

// Small presentational helper
function CostItem({ icon, text }) {
  return (
    <div className="flex items-start m-b-6 blue-600 dark-blue-300">
      <img src={icon} alt="icon" className="w-6 h-6 m-r-4" />
      <p>{text}</p>
    </div>
  );
}

// Exported as named export so this component can be reused elsewhere
export function Pricing() {
  return (
    <section id="Pricing" className="xs-p-y-16 md-p-y-24 bg-gray-50 dark-bg-gray-800">
      <div className="container container-lg m-b-16">
        <h3 className="h2 m-b-8 xs-w-100 md-w-50 lg-w-75">
          💸PERKIRAAN PENGELUARAN PRIBADI UNTUK KEBERANGKATAN KE JEPANG
        </h3>

        {/* Keterangan */}
        <div className="split-screen items-start gap-8">
          <div className="h5 font-default xs-m-b-8 md-m-b-0 md-m-r-12">
            <p>- Biaya pribadi ini tidak diserahkan ke Areta Informatics College, melainkan digunakan langsung oleh peserta.</p>
            <p>- Jadwal ujian JLPT diadakan dua kali setahun (Juli & Desember).</p>
          </div>
          <div className="h5 font-default xs-m-b-8 md-m-b-0 md-m-r-12">
            <p>- Ada kalanya tiket pesawat ditanggung perusahaan, sesuai waktu interview.</p>
            <p>- Biaya dapat berubah mengikuti kebijakan pemerintah.</p>
          </div>
        </div>
      </div>

      {/* Kartu biaya */}
      <div className="container container-lg">
        <div className="grid xs-grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
          {/* Kartu 1 */}
          <article className="card xs-p-y-8 md-p-y-10 xs-p-x-8 md-p-x-9 radius-lg border-gray-300 dark-border-gray-700 dark-bg-gray-700">
            <div className="m-t-6">
              <CostItem icon="/icons/pesawat.png" text="Paspor Elektronik (maksimal 5 tahun): Rp650.000" />
              <CostItem icon="/icons/pesawat.png" text="Paspor Elektronik (maksimal 10 tahun): Rp950.000" />
              <CostItem icon="/icons/visa.png" text="Biaya aplikasi visa: Rp500.000" />
            </div>
          </article>

          {/* Kartu 2 */}
          <article className="card xs-p-y-8 md-p-y-10 xs-p-x-8 md-p-x-9 radius-lg border-gray-300 dark-border-gray-700 dark-bg-gray-700">
            <div className="m-t-6">
              <CostItem icon="/icons/ujian.png" text="Ujian JLPT N3 (untuk Technoshoku): Rp220.000" />
              <CostItem icon="/icons/ujian.png" text="Ujian JLPT N3 (untuk Tokutei Ginou): Rp180.000" />
              <CostItem icon="/icons/ujian.png" text="Ujian Specified Skilled Worker (SSW): Rp500.000" />
            </div>
          </article>

          {/* Kartu 3 */}
          <article className="card xs-p-y-8 md-p-y-10 xs-p-x-8 md-p-x-9 radius-lg border-gray-300 dark-border-gray-700 dark-bg-gray-700">
            <div className="m-t-6">
              <CostItem icon="/icons/tiket.png" text="Tiket pesawat: Rp5.000.000" />
              <CostItem icon="/icons/money.png" text="Uang saku sampai gajian: Rp6.000.000" />
            </div>

            <a
              href="#"
              className="btn bg-blue-100 dark-bg-gray-600 btn-lg w-100 black dark-gray-200 m-t-6"
              role="button"
              aria-label="Perkiraan total biaya"
            >
              PERKIRAAN TOTAL: Rp13.170.000
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function BlogPage() {
  const posts = [
    {
      title: "Tips Persiapan Bekerja di Jepang",
      excerpt:
        "Sebelum berangkat, ada baiknya mempersiapkan dokumen, bahasa, dan mental agar proses adaptasi lebih mudah.",
      date: "4 September 2025",
      author: "Admin",
      image: "https://source.unsplash.com/600x400/?japan,work",
    },
    {
      title: "Belajar Bahasa Jepang dengan Cepat",
      excerpt:
        "Menguasai bahasa Jepang menjadi nilai plus. Yuk simak metode cepat belajar bahasa Jepang untuk pemula.",
      date: "2 September 2025",
      author: "Admin",
      image: "https://source.unsplash.com/600x400/?japan,language",
    },
    {
      title: "Peluang Kerja di Bidang IT di Jepang",
      excerpt:
        "Bidang IT di Jepang semakin berkembang. Banyak peluang untuk programmer dan software engineer.",
      date: "28 Agustus 2025",
      author: "Admin",
      image: "https://source.unsplash.com/600x400/?japan,technology",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section id="Blog" className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Blog & Artikel
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Temukan informasi, tips, dan berita terbaru seputar peluang kerja,
            budaya, serta kehidupan di Jepang.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <Blog posts={posts} />

      {/* Optional: pricing section can be used here or moved to components/Pricing.js */}
      {/* <Pricing /> */}
    </Layout>
  );
}

export default BlogPage;
export const Head = () => <SEOData title="Blog" />;
