import HeroBanner from "@/components/HeroBanner";
import PeopleNearMe from "@/components/PeopleNearMe";
import ProductCard from "@/components/ProductCard";
import ProudctCarousel from "@/components/ProductCarousel";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  //fetching data from api
  useEffect(() => {
    fetchProducts();
  }, []);

  //setting the results in setData state
  const fetchProducts = async () => {
    const data = await fetchDataFromApi("/api/books");
    // console.log("data fetched", data);
    setData(data);
  };

  const trimData = data?.slice(8, 15);

  return (
    <main>
      <HeroBanner />
      <section className="w-full max-w-[1280px] px-5 md:px-20">
        <div className=" justify-start flex max-w-[800px]  my-[20px] md:my-[40px]">
          <div className="w-[245px] h-[31px] text-zinc-600 text-[20px] font-medium">
            Popular Books Near You
          </div>
        </div>
      </section>
      
      <div className=" my-12 px-8  md:px-20">
        {trimData && <ProudctCarousel data={trimData}></ProudctCarousel>}
      </div>
      <section className="w-full max-w-[1280px] px-5 md:px-20">
        <div className=" justify-start flex max-w-[800px]  my-[20px] md:my-[40px]">
          <div className="w-[245px] h-[31px] text-zinc-600 text-[20px] font-medium">
            Top Rated Books
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5  gap-5 my-12 px-8  md:px-20">
        {data?.map((book) => (
          <ProductCard key={book.id} data={book}></ProductCard>
        ))}
      </div>
    </main>
  );
}
