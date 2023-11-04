import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sage Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="parent">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}
