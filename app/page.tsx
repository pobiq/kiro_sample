import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Schedule from "./components/Schedule";
import Award from "./components/Award";
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
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
