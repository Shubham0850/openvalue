import AssetOwner from "@/components/home/AssetOwner";
import Buyers from "@/components/home/Buyers";
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
        <title>Tangido : Real World Asset Marketplace</title>
        <meta
          name="description"
          content="Tangido is a secondary marketplace to trade real-world assets ranging from private credit, fixed debt instruments, real estate, precious metals, collectibles, and carbon credits"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.png" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </Head>

      <Hero />
      <WhyUs />
      <DiscoverAssets />
      <AssetOwner />
      <Buyers />
      <EarlyAccess />
      <FAQ />
      <JoinCommunity />
      <Newsletter />
    </>
  );
}
