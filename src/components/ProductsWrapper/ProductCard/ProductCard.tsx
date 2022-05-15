import Image from "next/image";
import { Typography } from "@mui/material";
import * as Styles from "./styles";

export interface Product {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  price?: number;
}

export type CardProps = {
  product?: Product;
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  price?: number;
};

const ProductCard = ({
  product,
  title,
  id,
  description,
  image,
  price
}: CardProps) => {
  const checkExistingImg = () => {
    if (image) {
      if (product?.image!) {
        return product?.image!;
      }
      return image;
    } else {
      return "/assets/logo-dooper.png";
    }
  };

  return (
    <Styles.ProductCardContainer>
      <Styles.CustomBox id={product?.id}>
        <Image
          src={product?.image! || checkExistingImg()}
          alt={product?.title || title}
          width="350px"
          height="350px"
          objectFit="contain"
          objectPosition="center"
        />
      </Styles.CustomBox>
      <Typography color="CaptionText" fontWeight="bold">
        {product?.title || title}
      </Typography>
      <Typography color="blue" fontWeight="bold">
        ${product?.price || price}
      </Typography>
      <Typography color="InfoText">
        {product?.description || description}
      </Typography>
    </Styles.ProductCardContainer>
  );
};

export default ProductCard;
