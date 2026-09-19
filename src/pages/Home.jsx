import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";

import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import CompanyStats from "../sections/CompanyStats/CompanyStats";
import VisionMission from "../sections/VisionMission/VisionMission";
import Brands from "../sections/Brands/Brands";
import Stores from "../sections/Stores/Stores";
import Services from "../sections/Services/Services";
import WhyUs from "../sections/WhyUs/WhyUs";
import CTA from "../sections/CTA/CTA";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />

      <main>
        <Hero />
        <About />
        <CompanyStats />
        <VisionMission />
        <Brands />
        <Stores />
        <Services />
        <WhyUs />
        <CTA />
      </main>

      <Footer />
    </PageWrapper>
  );
}