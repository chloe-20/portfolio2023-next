"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from "@/components/Site";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Skip from "@/components/Skip";
import lenis from "@/utils/lenis";
import link from "@/utils/link";

export default function Home() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Skill />
        <Site />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}