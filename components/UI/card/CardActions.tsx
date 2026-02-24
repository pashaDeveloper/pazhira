import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { cartActions } from "../../../store/cart-slice";
import { favoriteActions } from "../../../store/favorite-slice";
import {
  RiHeartFill,
  RiHeartAddLine,
  RiShareLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { IProduct } from "../../../lib/types/products";
import { IFavoriteRootState } from "../../../lib/types/favorite";

import { toast } from "react-toastify";
import { useLanguage } from "../../../hooks/useLanguage";

interface Props {
  product: IProduct;
}

const CardActions: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const favoriteItems = useSelector(
    (state: IFavoriteRootState) => state.favorite.items
  );
  const isInFavorite = favoriteItems.some(
    (item) => item.slug.current === product.slug.current
  );
  const FavoriteIcon = isInFavorite ? RiHeartFill : RiHeartAddLine;

  function addToCartHandler() {
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
    toast.success(t.productAddedToCartMsg, {
      theme: theme === "dark" ? "dark" : "light",
    });
  }

  function toggleFavoriteHandler() {
    !isInFavorite
      ? dispatch(favoriteActions.addToFavorite(product))
      : dispatch(favoriteActions.removeFromFavorite(product.slug.current));
  }

  return (
    <div className="w-auto md:w-auto md:h-[130px] mt-2 px-2 py-1 md:p-2 flex md:flex-col items-center gap-2 md:gap-0 justify-around self-center absolute bottom-2 md:bottom-auto md:top-2 left-2 md:left-2 rounded-md md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/35">
      <div
        className="hover:text-rose-600 transition-colors px-1 md:px-0"
        onClick={toggleFavoriteHandler}
      >
        <FavoriteIcon
          style={{
            fontSize: "1.2rem",
            fill: `${isInFavorite ? "#ee384e" : ""}`,
          }}
        />
      </div>
      <div className="hover:text-rose-600 transition-colors px-1 md:px-0">
        <RiShareLine style={{ fontSize: "1.2rem" }} />
      </div>
      <div
        className="hover:text-rose-600 active:scale-125 transition-all px-1 md:px-0"
        onClick={addToCartHandler}
      >
        <RiShoppingCart2Line
          style={{
            fontSize: "1.2rem",
          }}
        />
      </div>
    </div>
  );
};

export default CardActions;
