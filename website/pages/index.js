import { HomepageLayout } from './layouts'
import Head from 'next/head';
import Footer from "./modules/Footer";
import Hero from "./modules/Hero";
import HomepageContent from "./modules/HomepageContent";
import HomepageForm from "./modules/HomepageForm";
import TripleCallout from "./modules/TripleCallout";

export default function Home() {
  return (
		<HomepageLayout>
      <Head>
        <title>Sarah Byrne Acting Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <HomepageContent />
      <HomepageForm />
      <TripleCallout />
      <Footer />
		</HomepageLayout>
  );
}
