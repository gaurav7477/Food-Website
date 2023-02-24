import Head from "next/head";
import Hero from "../componants/Hero";
import Layout from "../componants/Layout";
import Menu from "../componants/Menu";
import Service from "../componants/Service";
import { client } from "../lib/client";
import css from '../styles/Home.module.css'

export default function Home({pizzas}) {
  // console.log(pizzas)
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>FUDO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        
        <main>
          <Hero />
          <Service />
          <Menu pizzas = {pizzas} />
        </main>
      </div>

    </Layout>
  );
}

// it return JSON which will be used to render the pages
export const getServerSideProps = async()=>{
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props:{
      pizzas
    }
  }
}

