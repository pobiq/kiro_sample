import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import KiroIntro from "./components/KiroIntro";
import Introduce from "./components/Introduce";
import Award from "./components/Award";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <Overview />
      <KiroIntro />
      <Introduce />
      <Award />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
