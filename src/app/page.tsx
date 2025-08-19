import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Brands from "@/components/Brands";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synaxa Technologies",
  description: "Synaxa Technologies is a software company delivering innovative digital solutions, products, and services to help businesses grow in the modern era.",
  keywords: ["Synaxa", "Synaxa Technologies", "software company", "IT solutions", "digital services", "business software"],
  authors: [{ name: "Synaxa Technologies" }],
  openGraph: {
    title: "Synaxa Technologies",
    description: "Empowering businesses with innovative software solutions.",
    url: "https://synaxa.com", // replace with your actual domain
    siteName: "Synaxa Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Contact /> */}
    </>
  );
}
