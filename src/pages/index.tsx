import AssetOwner from "@/components/home/AssetOwner";
import DiscoverAssets from "@/components/home/DiscoverAssets";
import EarlyAccess from "@/components/home/EarlyAccess";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import JoinCommunity from "@/components/home/JoinCommunity";
import Newsletter from "@/components/home/Newsletter";
import WhyUs from "@/components/home/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenValue</title>
        <meta
          name="description"
          content="Explore Institutional Grade Real world assets "
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </Head>

      <Hero />
      <WhyUs />
      <DiscoverAssets />
      <AssetOwner />
      <EarlyAccess />
      <FAQ />
      <JoinCommunity />
      <Newsletter />
    </>
  );
}
