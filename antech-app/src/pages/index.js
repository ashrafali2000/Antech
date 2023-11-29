"use client"
import Blogs from '@/components/Blogs'
import Bsolution from '@/components/bSolution'
import DisCompany from '@/components/disCompany'
import Footer from '@/components/footer'
import HeroSection from '@/components/heroSection'
import Navbar from '@/components/navbar'
import OurClients from '@/components/ourClients'
import Skills from '@/components/skills'
import WorkProcess from '@/components/workProcess'
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkProcess />
      <DisCompany />
      <Skills />
      <Bsolution />
      <OurClients />
      <Blogs />
      <Footer />
    </>
  )
}
