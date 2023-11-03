import About from "@/components/organism/About";
import Footer from "@/components/organism/Footer";
import Hero from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import Portofolio from "@/components/organism/Portofolio";
import Sertifikat from "@/components/organism/Sertifikat";
import Skills from "@/components/organism/Skills";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Page() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Sertifikat />
      <Portofolio />
      <Footer />
    </>
  )
}