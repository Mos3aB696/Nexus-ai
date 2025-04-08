"use client";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import About from "@/components/About";
import HomePage from "@/components/HomePage";
import InnerPage from "@/components/InnerPage";
import UtilityPage from "@/components/UtilityPage";
import RequestFigma from "@/components/RequestFigma";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  });
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <HomePage />
      <InnerPage />
      <UtilityPage />
      <RequestFigma />
      <Footer />
    </>
  );
}
