import HeroBanner from "@/components/HeroBanner";
import PeopleNearMe from "@/components/PeopleNearMe";
import ProductCard from "@/components/ProductCard";
import ProudctCarousel from "@/components/ProductCarousel";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <section className="w-full max-w-[1280px] px-5 md:px-20">
        <div className=" justify-start flex max-w-[800px]  my-[20px] md:my-[40px]">
          <div class="w-[245px] h-[31px] text-zinc-600 text-[20px] font-medium">
            Popular Books Near You
          </div>
        </div>
      </section>
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-5 my-12 px-8  md:px-20 */}
      <div className=" my-12 px-8  md:px-20">
       
        {/* <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard> */}
        
        <ProudctCarousel></ProudctCarousel>
      </div>
      <section className="w-full max-w-[1280px] px-5 md:px-20">
        <div className=" justify-start flex max-w-[800px]  my-[20px] md:my-[40px]">
          <div class="w-[245px] h-[31px] text-zinc-600 text-[20px] font-medium">
            Top Rated Books
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5  gap-5 my-12 px-8  md:px-20">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </main>
  );
}
