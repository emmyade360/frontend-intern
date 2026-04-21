import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagementSystem from "@/components/LearningManagementSystem";
import CorporateTrainings from "@/components/CorporateTrainings";
import PersonalisedTraining from "@/components/PersonalisedTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopmentProgram from "@/components/ManagementDevelopmentProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LearningManagementSystem />
        <CorporateTrainings />
        <PersonalisedTraining />
        <CapacityDevelopment />
        <ManagementDevelopmentProgram />
        <TransformationHub />
        <TrainingConsultant />
        <CTABanner />
        <Testimonials />
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
}
