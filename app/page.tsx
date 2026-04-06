import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Strategies from "./components/Strategies";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Judging from "./components/Judging";
import KiroIntro from "./components/KiroIntro";
import DetailedSchedule from "./components/DetailedSchedule";
import PreEducation from "./components/PreEducation";
import FAQ from "./components/FAQ";
import ApplyForm from "./components/ApplyForm";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <KiroIntro />
      <Strategies />
      <Timeline />
      <DetailedSchedule />
      <PreEducation />
      <Prizes />
      <Judging />
      <FAQ />
      <ApplyForm />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
