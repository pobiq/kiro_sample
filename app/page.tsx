import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Schedule from "./components/Schedule";
import Award from "./components/Award";
import Judging from "./components/Judging";
import KiroIntro from "./components/KiroIntro";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <KiroIntro />
      <Introduce />
      <Schedule />
      <Award />
      <Judging />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
