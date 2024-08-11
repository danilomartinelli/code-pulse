import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { clients, commonFeatures, products } from "@/lib/constants";
import PricingCard from "./_components/pricing-card";
import GradientButton from "./_components/gradient-button";
import { getOptionalDbUser } from "@/lib/server-utils";

export default async function Home() {
  const user = await getOptionalDbUser();

  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar user={user} />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <GradientButton>Start For Free Today</GradientButton>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Code Pulse
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <PricingCard title="Hobby" price="$0" features={commonFeatures} />
          <PricingCard
            title="Pro Plan"
            price="$29"
            features={commonFeatures}
            highlightBorder={true}
          />
          <PricingCard
            title="Unlimited"
            price="$99"
            features={commonFeatures}
          />
        </div>
      </section>
    </main>
  );
}
