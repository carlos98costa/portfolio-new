import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/sections/hero'
import StatsStrip from '@/components/sections/stats-strip'
import ProjectStrip from '@/components/sections/project-strip'
import AboutSection from '@/components/sections/about'
import StackSection from '@/components/sections/stack'
import ProjectsSection from '@/components/sections/projects'
import ExperienceSection from '@/components/sections/experience'
import ContactSection from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ProjectStrip />
        <StatsStrip />
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}