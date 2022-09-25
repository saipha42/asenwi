import Company from "components/company";
import Faq from "components/faq";
import Footer from "components/footer";
import GetStarted from "components/getStarted";
import Intro from "components/intro";
import Portfolio from "components/portfolio";
import Service from "components/service";
import Testimonial from "components/testimonial";

export default function Home() {
  return (
    <>
    <Intro/>
    <Company/>
    <Service/>
    <Testimonial/>
    <Faq/>
    <Portfolio/>
    <GetStarted/>
    <Footer/>
    </>
  )
}
