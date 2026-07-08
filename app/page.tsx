import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CertBar from "./components/CertBar";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import WhatWeDo from "./components/WhatWeDo";
import WhyBasmati from "./components/WhyBasmati";
import Processing from "./components/Processing";
import Infrastructure from "./components/Infrastructure";
import QualityControl from "./components/QualityControl";
import FeaturedVarieties from "./components/FeaturedVarieties";
import ExportProcess from "./components/ExportProcess";
import Packaging from "./components/Packaging";
import GlobalReach from "./components/GlobalReach";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a1f15] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <CertBar />
      <Products />
      <WhyUs />
      <WhatWeDo />
      <WhyBasmati />
      <Processing />
      <Infrastructure />
      <QualityControl />
      <FeaturedVarieties />
      <ExportProcess />
      <Packaging />
      <GlobalReach />
      <Testimonials />
      <InquiryForm />
      <Footer />
    </main>
  );
}
