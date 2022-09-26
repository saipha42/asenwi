import Company from "components/company";
import Faq from "components/faq";
import Footer from "components/footer";
import GetStarted from "components/getStarted";
import Intro from "components/intro";
import Portfolio from "components/portfolio";
import Service from "components/service";
import Testimonial from "components/testimonial";
import {connectToDb} from '../lib/connectdb'
import Head from "next/head";
export default function Home({testimonials}) {

  return (
    <>
    <Head>
      <title>Sai Marn Pha portfolio</title>
      <meta name="description" content={`Sai Marn Pha, Software Engineering, ${testimonials}`} />
    </Head>
    <Intro/>
    <Company/>
    <Service/>
    <Testimonial testimonials={testimonials} />
    <Faq/>
    <Portfolio/>
    <GetStarted/>
    <Footer/>
    </>
  )
}

export async function getStaticProps(context) {
  let testimonials;
  try{
    const {mongoClient} = await connectToDb();
    const db = mongoClient.db('vercel-integrate');
    const collection = db.collection('testimonial');
    const res  = await collection.find({}).toArray();
    testimonials=JSON.stringify(res);

  }catch(e){
      console.log('Connection error: on api ', e)
      return {
        props:{
          error:"Fetching data error",
          testimonials:[]
        }
      }
  }
  return {
    props: {
      testimonials
    },
    revalidate: 3600
  }
}
