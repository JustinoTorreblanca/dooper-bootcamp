import Image from "next/image";
import { Typography } from "@mui/material";
import * as Styles from "./styles";

export interface Product {
  key?: number;
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  price?: number;
}

type CardProps = {
  product: Product;
};

const ProductCard = ({ product }: CardProps) => {
  return (
    <Styles.ProductCardContainer>
      <Styles.CustomBox>
        <Image
          src={product.image!}
          alt={product.title}
          width="350px"
          height="350px"
          objectFit="contain"
          objectPosition="center"
        />
      </Styles.CustomBox>
      <Typography color="CaptionText" fontWeight="bold">
        {product.title}
      </Typography>
      <Typography color="blue" fontWeight="bold">
        ${product.price}
      </Typography>
      <Typography color="InfoText">{product.description}</Typography>
    </Styles.ProductCardContainer>
  );
};

export default ProductCard;
