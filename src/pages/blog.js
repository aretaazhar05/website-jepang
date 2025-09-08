import * as React from "react";
import Layout from "../components/Layout";
import { SEOData } from "../components/SEOData";
import Blog from "../components/Blog";

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
            <section className="py-12 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                    <article
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200/30 dark:border-gray-700/50 overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                    >
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {post.excerpt}
                        </p>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
                        <span>{post.date}</span>
                        <span>✍ {post.author}</span>
                        </div>
                    </div>
                    </article>
                ))}
                </div>
            </section>
            </Layout>
        );
        }

        export default BlogPage;
        export const Head = () => <SEOData title="Blog" />;