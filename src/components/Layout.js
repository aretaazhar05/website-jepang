import React from "react";
import "../styles/dist/ravenbright.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        
      </main>
      <Footer />
    </>
  );
}
