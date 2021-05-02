import React from "react";
import About from "../components/about";
import Why from "../components/why";
import Footer from "../components/footer";
import BrandPresentation from "../components/brand";

export default function Page() {
  return (
    <>
      <BrandPresentation />
      <About />
      <Why />
      <Footer />
    </>
  );
}
