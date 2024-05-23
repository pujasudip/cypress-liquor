import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import AddToCart from "../cart/AddToCart";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const items = [
  {
    name: "Wireless Earphone",
    description: "True wireless bluetooth earphone",
    price: 19.99,
    rating: 5,
    ratingCount: 140,
    availableVariants: [],
    images: [],
    thumbnail:
      "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/no-image.png",
    isOnSale: true,
    stock: 8,
  },
  {
    name: "Quest 3",
    description: "Meta Quest VR head set",
    price: 400,
    rating: 4,
    ratingCount: 391,
    availableVariants: [],
    images: [],
    thumbnail:
      "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/no-image.png",
    isOnSale: true,
    stock: 0,
  },
  {
    name: "Binoculars",
    description: "50X pair of binoculars",
    price: 238,
    rating: 4,
    ratingCount: 70,
    availableVariants: [],
    images: [],
    thumbnail:
      "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/no-image.png",
    isOnSale: true,
    stock: 8,
  },
  {
    name: "Airpods",
    description: "Noise cancellation, long battery life",
    price: 169,
    rating: 4,
    ratingCount: 251,
    availableVariants: [],
    images: [],
    thumbnail:
      "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/no-image.png",
    isOnSale: true,
    stock: 8,
  },
  {
    name: "Walkie Talkie",
    description: "50 miles with 3 days of battery life",
    price: 80,
    rating: 4,
    ratingCount: 34,
    availableVariants: [],
    images: [],
    thumbnail:
      "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/no-image.png",
    isOnSale: true,
    stock: 8,
  },
];

const TrendingBanner = () => {
  return (
    <Box padding={2} display="flex" width="100%" height="275px">
      <Box mr={2} width="20%" display="flex" alignItems="center">
        <Typography fontWeight="bold">New & Trending</Typography>
      </Box>
      <Box width="80%">
        <Carousel responsive={responsive}>
          {items.map((product) => (
            <AddToCart item={product} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default TrendingBanner;
