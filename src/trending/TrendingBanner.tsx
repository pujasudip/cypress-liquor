import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import AddToCart from "../cart/AddToCart";

const items = [
  {
    name: "airpod",
    price: 12,
    images: [],
    thumbnail: "",
  },
  {
    name: "ipad",
    price: 12,
    images: [],
    thumbnail: "",
  },
  {
    name: "macbook",
    price: 12,
    images: [],
    thumbnail: "",
  },
];

const TrendingBanner = () => {
  return (
    <Box padding={2} display="flex">
      <Box mr={2}>test</Box>
      <Box>
        <Carousel>
          {items.map(() => (
            <Box display="flex">
              {items.map((product) => (
                <AddToCart item={product} />
              ))}
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default TrendingBanner;
