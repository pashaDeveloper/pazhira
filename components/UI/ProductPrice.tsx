import React from "react";
import { useExchangeRateGBPToIRR } from "../../hooks/useExchangeRateGBPToIRR";
import { useLanguage } from "../../hooks/useLanguage";
import { calculateDiscountPercentage } from "../../utilities/calculateDiscountPercentage";
import { changeNumbersFormatEnToFa } from "../../utilities/changeNumbersFormatEnToFa";
import { gbpCurrencyFormat } from "../../utilities/currencyFormat";

interface Props {
  price: number;
  discount?: number;
  isLargeSize?: boolean;
  isInSlider?: boolean;
  usePriceBox?: boolean;
}
const ProductPrice: React.FC<Props> = ({
  price,
  discount,
  isLargeSize = false,
  isInSlider,
  usePriceBox = false,
}) => {
  const { t, locale } = useLanguage();
  const irPrice = useExchangeRateGBPToIRR(price);
  const discountPrice = discount
    ? calculateDiscountPercentage(price, discount)
    : 0;
  const irDiscountPrice = useExchangeRateGBPToIRR(discountPrice);

  //style base on component position
  const textMainPriceSize = isLargeSize
    ? "text-xl md:text-3xl"
    : "text-md md:text-lg";
  const textDiscountPriceSize = isLargeSize
    ? "text-md md:text-xl"
    : "text-[12px] md:text-md";
  const justifyContent = isInSlider && locale === "fa" ? "flex-start" : "";
  const flexDirection = isInSlider || locale === "en" ? "row" : "row-reverse";
  const priceBoxClass = usePriceBox
    ? "bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-300/70 dark:border-emerald-500/40 rounded-lg px-2 py-1"
    : "";
  const wrapperAlignmentClass = usePriceBox
    ? "justify-center self-center text-center"
    : "rtl:justify-end rtl:self-end ltr:self-start text-left";

  return (
    <div>
      <div
        className={`flex mt-2 ${wrapperAlignmentClass}`}
        style={{ justifyContent: usePriceBox ? "center" : justifyContent }}
      >
        {discount ? (
          <div
            className={`flex items-end flex-wrap ${priceBoxClass}`}
            style={{ flexDirection }}
          >
            <span className="flex flex-col">
              <del
                className={`text-rose-800 dark:text-rose-200 md:text-sm ${textDiscountPriceSize}`}
              >
                <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                <sub className="ml-1 text-[10px]">
                  {locale === "fa" ? "تومان" : ""}
                </sub>
                {locale === "en" ? gbpCurrencyFormat(price) : irPrice}
              </del>
              <ins
                className={`font-bold self-end no-underline mt-1 ${textMainPriceSize}`}
              >
                <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                <sub className="ml-1 text-[10px]">
                  {locale === "fa" ? "تومان" : ""}
                </sub>
                {locale === "en"
                  ? gbpCurrencyFormat(discountPrice)
                  : irDiscountPrice}
              </ins>
            </span>
            <span
              className="text-emerald-700 dark:text-emerald-300 ml-1 text-[12px] inline-block"
              style={{ direction: "ltr" }}
            >{`(-%${
              locale === "en" ? discount : changeNumbersFormatEnToFa(discount!)
            })`}</span>
          </div>
        ) : (
          <div>
            {isInSlider ? <div className="h-[1.4rem]"></div> : null}{" "}
            {/* ☝slider cards (.slick-slide=>Slider component) are float and because of that, they don't accept height so, for making cards the same height, I have to do this hack*/}
            <div
              className={`flex items-center ${textMainPriceSize} font-bold no-underline ${priceBoxClass}`}
              style={{ flexDirection }}
            >
              <sup className="mr-1 rtl:block">{locale === "en" ? "£" : ""}</sup>
              <span>
                {locale === "en" ? gbpCurrencyFormat(price) : irPrice}
              </span>
              <sub className="ml-1 text-[10px]">
                {locale === "fa" ? "تومان" : ""}
              </sub>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
