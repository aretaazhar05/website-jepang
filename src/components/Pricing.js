import React from "react";

function Pricing() {
  return (
    <section className="xs-p-y-16 md-p-y-24 bg-gray-50 dark-bg-gray-800">
      <div className="container container-lg m-b-16">
        <h3 className="h2 m-b-8 xs-w-100 md-w-50 lg-w-75">
          PERKIRAAN PENGELUARAN PRIBADI UNTUK KEBERANGKATAN KE JEPANG
        </h3>

        {/* Keterangan */}
        <div className="split-screen items-start gap-8">
          <div className="h5 font-default xs-m-b-8 md-m-b-0 md-m-r-12">
            <p>- Biaya pribadi ini tidak diserahkan ke Hashiwa, melainkan digunakan langsung oleh peserta.</p>
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
              <div className="flex items-start m-b-6 blue-600 dark-blue-300">
                <CheckIcon />
                <p>Paspor Elektronik (maksimal 5 tahun): Rp650.000</p>
              </div>
              <div className="flex items-start m-b-6 blue-600 dark-blue-300">
                <CheckIcon />
                <p>Paspor Elektronik (maksimal 10 tahun): Rp950.000</p>
              </div>
              <div className="flex items-start blue-600 dark-blue-300">
                <CheckIcon />
                <p>Biaya aplikasi visa: Rp500.000</p>
              </div>
            </div>
          </article>

          {/* Kartu 2 */}
          <article className="card xs-p-y-8 md-p-y-10 xs-p-x-8 md-p-x-9 radius-lg border-gray-300 dark-border-gray-700 dark-bg-gray-700">
            <div className="m-t-6">
              <div className="flex items-start m-b-6 blue-600 dark-blue-300">
                <CheckIcon />
                <p>Ujian JLPT N3 (untuk Technoshoku): Rp220.000</p>
              </div>
              <div className="flex items-start m-b-6 blue-600 dark-blue-300">
                <CheckIcon />
                <p>Ujian JLPT N3 (untuk Tokutei Ginou): Rp180.000</p>
              </div>
              <div className="flex items-start blue-600 dark-blue-300">
                <CheckIcon />
                <p>Ujian Specified Skilled Worker (SSW): Rp500.000</p>
              </div>
            </div>
          </article>

          {/* Kartu 3 */}
          <article className="card xs-p-y-8 md-p-y-10 xs-p-x-8 md-p-x-9 radius-lg border-gray-300 dark-border-gray-700 dark-bg-gray-700">
            <div className="m-t-6">
              <div className="flex items-start m-b-6 blue-600 dark-blue-300">
                <CheckIcon />
                <p>Tiket pesawat: Rp5.000.000</p>
              </div>
              <div className="flex items-start m-b-6 blue-600 dark-blue-300">
                <CheckIcon />
                <p>Uang saku sampai gajian: Rp6.000.000</p>
              </div>
            </div>

            <a
              href="#0"
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

// Komponen ikon check agar tidak duplikasi kode
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ai ai-Check m-r-4"
    >
      <path d="M4 12l6 6L20 6" />
    </svg>
  );
}

export default Pricing;
