import Lamp from './_components/lamp';
import Navbar from './_components/navbar';
import PricingCard from './_components/pricing-card';
import GradientButton from './_components/gradient-button';
import { getOptionalDbUser } from '@/lib/server/utils';
import HeroParallax from './_components/hero-parallax';
import InfiniteMovingCards from './_components/infinite-moving-cards';
import ContainerScroll from './_components/container-scroll';
import { commonFeatures, products } from '@/lib/misc/mocks';
import { getTranslations } from 'next-intl/server';

function generateClients(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    href: `/${index + 1}.png`,
  }));
}

export default async function Home() {
  const user = await getOptionalDbUser();

  const t = await getTranslations('HomePage');

  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar user={user} />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <GradientButton>{t('GradientButton')}</GradientButton>
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
        items={generateClients(10)}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <Lamp />
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
