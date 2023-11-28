
import Bsolution from '@/components/bSolution'
import DisCompany from '@/components/disCompany'
import HeroSection from '@/components/heroSection'
import Navbar from '@/components/navbar'
import Skills from '@/components/skills'
import WorkProcess from '@/components/workProcess'
export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
    <WorkProcess></WorkProcess>
    <DisCompany></DisCompany>
    <Skills></Skills>
    <Bsolution></Bsolution>
   </>
  )
}
