import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20 ">
      <Wrapper>
        <div className="">
          <section className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <div className=" flex gap-10">
              <ProductDetailsCarousel></ProductDetailsCarousel>
              <div className="">
                <h2 className="text-2xl font-semibold mb-2">
                  Atomic Habbits Book Name
                </h2>
                <div>James Clear</div>
                <div>⭐⭐⭐⭐</div>
              </div>
            </div>
          </section>
          <section>
            <h5 className="text-2xl  ">Synopsis</h5>
            <p>
              Desripton it is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </section>
          <section className="">
            <h5 className="text-2xl">Book Review</h5>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </section>
          <section>
            <h2 className="text-2xl">Book Exchange Near Me</h2>

            <div>People Near Me Seciton</div>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
