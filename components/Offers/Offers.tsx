import React from "react";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import { useSelector } from "react-redux";
import { IProduct } from "../../lib/types/products";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";
import Container from "../shared/container";

const Offers = () => {
  const OfferProducts = useSelector(
    (state: any) => state.specialOfferProductsList.specialOfferProducts
  );

  return (
    <Container className="md:mt-10 w-full xl:max-w-[2100px]">
      <CarouselBox title="offers" className="!px-0" href="/">
        {OfferProducts.slice(0, 10).map((product: IProduct) => {
          return <CarouselBoxCard key={product.name} product={product} />;
        })}
      </CarouselBox>
    </Container>
  );
};

export default Offers;