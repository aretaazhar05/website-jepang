import * as React from "react";

export default function Blog() {
return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Blog Kami
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Cara Bekerja di Jepang",
              desc: "Panduan lengkap proses kerja di Jepang untuk pemula.",
            },
            {
              title: "Tips Hidup di Jepang",
              desc: "Bagaimana cara beradaptasi dengan budaya dan lingkungan baru.",
            },
            {
              title: "Belajar Bahasa Jepang",
              desc: "Metode mudah untuk mempercepat belajar bahasa Jepang.",
            },
          ].map((post, index) => (
            <article
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{post.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
