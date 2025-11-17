import React from "react";
import BannerBox from "./banner-box/BannerBox";
import { bannerContent } from "../../mock/banner";
import SectionTitle from "../UI/SectionTitle";
import Container from "../shared/container";

const Banner = () => {
  return (
    <Container className="flex items-center flex-col w-full xl:max-w-[2100px] my-4 md:my-8 mx-auto">
      <SectionTitle title={"specialSale"} />
      <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
        {bannerContent.map(
          ({
            title,
            description,
            numberOfDiscountDate,
            href,
            imgHeight,
            imgSrc,
            imgWidth,
            buttonText,
          }) => {
            return (
              <BannerBox
                title={title}
                description={description}
                numberOfDiscountDate={numberOfDiscountDate}
                href={href}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                buttonText={buttonText}
                key={title}
              />
            );
          }
        )}
      </div>
    </Container>
  );
};

export default Banner;