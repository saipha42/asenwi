import Company from "components/company";
import Faq from "components/faq";
import Footer from "components/footer";
import GetStarted from "components/getStarted";
import Intro from "components/intro";
import Portfolio from "components/portfolio";
import Service from "components/service";
import Testimonial from "components/testimonial";

import Head from "next/head";
export default function Home() {

  return (
    <>
    <Head>
      <title>Sai Marn Pha portfolio</title>
      <meta name="description" content="Sai Marn Pha, Software Engineering" />
    </Head>
    <Intro/>
    <Company/>
    <Service/>
    <Testimonial  />
    <Faq/>
    <Portfolio/>
    <GetStarted/>
    <Footer/>
    </>
  )
}