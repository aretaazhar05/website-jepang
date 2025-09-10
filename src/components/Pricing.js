import React from "react";
import Layout from "../components/Layout";
import { SEOData } from "../components/SEOData";

// Small presentational helper
function CostItem({ icon, text }) {
  return (
    <div className="flex items-start mb-6 text-blue-600 dark:text-blue-300">
      <img src={icon} alt="icon" className="w-6 h-6 mr-4" />
      <p>{text}</p>
    </div>
  );
}

function Pricing() {
  return (
    <Layout>
      <section
        id="Pricing"
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto mb-16 px-4">
          <h3 className="text-2xl font-bold mb-8 md:w-1/2 lg:w-3/4">
            💸 PERKIRAAN PENGELUARAN PRIBADI UNTUK KEBERANGKATAN KE JEPANG
          </h3>

          {/* Keterangan */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-lg">
              <p>
                - Biaya pribadi ini tidak diserahkan ke Areta Informatics
                College, melainkan digunakan langsung oleh peserta.
              </p>
              <p>- Jadwal ujian JLPT diadakan dua kali setahun (Juli & Desember).</p>
            </div>
            <div className="text-lg">
              <p>
                - Ada kalanya tiket pesawat ditanggung perusahaan, sesuai waktu
                interview.
              </p>
              <p>- Biaya dapat berubah mengikuti kebijakan pemerintah.</p>
            </div>
          </div>
        </div>

        {/* Kartu biaya */}
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Kartu 1 */}
            <article className="p-8 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700">
              <div className="mt-6">
                <CostItem
                  icon="/icons/pesawat.png"
                  text="Paspor Elektronik (maksimal 5 tahun): Rp650.000"
                />
                <CostItem
                  icon="/icons/pesawat.png"
                  text="Paspor Elektronik (maksimal 10 tahun): Rp950.000"
                />
                <CostItem
                  icon="/icons/visa.png"
                  text="Biaya aplikasi visa: Rp500.000"
                />
              </div>
            </article>

            {/* Kartu 2 */}
            <article className="p-8 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700">
              <div className="mt-6">
                <CostItem
                  icon="/icons/ujian.png"
                  text="Ujian JLPT N3 (untuk Technoshoku): Rp220.000"
                />
                <CostItem
                  icon="/icons/ujian.png"
                  text="Ujian JLPT N3 (untuk Tokutei Ginou): Rp180.000"
                />
                <CostItem
                  icon="/icons/ujian.png"
                  text="Ujian Specified Skilled Worker (SSW): Rp500.000"
                />
              </div>
            </article>

            {/* Kartu 3 */}
            <article className="p-8 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700">
              <div className="mt-6">
                <CostItem
                  icon="/icons/tiket.png"
                  text="Tiket pesawat: Rp5.000.000"
                />
                <CostItem
                  icon="/icons/money.png"
                  text="Uang saku sampai gajian: Rp6.000.000"
                />
              </div>

              <a
                href="#"
                className="block text-center mt-6 py-3 px-4 rounded-lg bg-blue-100 dark:bg-gray-600 text-black dark:text-gray-200 font-bold"
                role="button"
                aria-label="Perkiraan total biaya"
              >
                PERKIRAAN TOTAL: Rp13.170.000
              </a>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Pricing;
export const Head = () => <SEOData title="Perkiraan Biaya ke Jepang" />;
