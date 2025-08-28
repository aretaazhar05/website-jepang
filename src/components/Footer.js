import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import footerData from "../data/FooterData.json";
import socialData from "../data/SocialData";

export default function Footer() {
  return (
    <footer id="footer" className="p-y-24 flex flex-column bg-gray-100 dark-bg-gray-900">
      {/* Logo & Menu */}
      <div className="container container-xl">
        <div className="footer-info border-none flex flex-col md-flex-row justify-between">
          <ul className="footer-links">
            <li>
              <a href="/" className="flex items-center">
                <StaticImage
                  quality={75}
                  placeholder="blurred"
                  className="w-10 h-15"
                  src="../images/logoareta6.png"
                  width={40}
                  height={40}
                  alt="Areta Informatics College logo"
                />
                <div className="m-l-4 flex items-start flex-column">
                  <h1 className="h5 font-bold line-h-xl">Areta Informatics College</h1>
                  <p className="small align-left">Kampus IT & Digital Marketing</p>
                </div>
              </a>
            </li>
          </ul>
          <ul className="footer-links xs-flex-wrap md-flex-no-wrap">
            {footerData.link.map((item) => (
              <li className="xs-m-b-8 md-m-b-0 m-l-12" key={item.name}>
                <a href={item.url} className="subtitle link-footer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Kontak Tambahan */}
      <div className="container container-xl m-y-6">
        <h4 className="h5 m-b-4">Hubungi Kami</h4>
        <ul className="text-gray-700">
          <li className="flex items-center m-b-2">
            📞 
            <a
              href="https://wa.me/6281285234904"
              className="m-l-2 text-blue-600 hover:underline"
            >
              +62 812 3456 7890
            </a>
          </li>
          <li className="flex items-center m-b-2">
            ✉️ 
            <a
              href="mailto:aretainformaticsc@gmail.com"
              className="m-l-2 text-blue-600 hover:underline"
            >
              aretainformaticsc@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Sosial Media */}
      <div className="container container-xl m-b-6">
        <div className="footer-info flex justify-between items-center">
          <ul className="footer-links flex">
            {socialData.map((data, index) => (
              <li key={index}>
                <a
                  href={data.socialUrl}
                  className="flex m-r-6 text-gray-600 hover:text-blue-500"
                  aria-label={data.socialLabel}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {data.socialLogo}
                </a>
              </li>
            ))}
          </ul>
          <small className="text-gray-500">{footerData.copyright}</small>
        </div>
      </div>

      {/* Peta Statis */}
      <div className="container container-xl m-b-6">
        <h4 className="h5 m-b-4">📍 Lokasi Kampus</h4>
        <a
          href="https://maps.app.goo.gl/pDCqwuYkUp83MebW6"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <StaticImage
            src="../images/maps2.png"
            alt="Peta lokasi Areta Informatics College"
            placeholder="blurred"
            width={300}
            height={200}
            quality={80}
            className="w-full h-auto rounded-xl shadow-lg hover:opacity-80 transition"
          />
        </a>
      </div>

      {/* Attribution */}
      <div className="container container-xl">
        <div className="flex flex-column lg-w-75">
          <ul className="flex m-b-6 flex-wrap lg-w-75">
            {footerData.attributions.map((data, index) => (
              <li className="m-r-2 caption" key={index}>
                {data.text}
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="caption m-l-2 underline"
                >
                  {data.brandName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
