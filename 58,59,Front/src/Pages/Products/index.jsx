import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/FetchData";
import ProductCard from "../../Components/ProductCard";
import { ProductCardSkeleton } from "../../Components";
function PriceText(value) {
  return `$${value}`;
}
const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 500,
    label: "$500",
  },
];
export default function Products() {
  const { categoryId } = useParams();
  const [sort, setSort] = useState("-createdAt");
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([0, 500]);
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `product?sort=${sort}&${
          categoryId != "all" ? `filters[categoryId][$eq]=${categoryId}&` : ""
        }filters[price][$gte]=${price[0]}&filters[price][$lte]=${price[1]}`
      );
      setProducts(response?.data);
    })();
  }, [sort, price, categoryId]);
  const items = products?.map((e, index) => (
    <ProductCard
      key={index}
      id={e._id}
      name={e.name}
      img={e.images}
      desc={e.description}
      price={e.price}
    />
  ));
  const skeletonSlides = Array(12)
    .fill(0)
    .map((_, index) => (
      
        <ProductCardSkeleton key={index} />
     
    ));
  return (
    <Box
      sx={{
        padding: "20px 5%",
      }}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <FormControl sx={{ width: "300px" }}>
          <InputLabel id="sort">Sort</InputLabel>
          <Select
            labelId="sort"
            id="sort"
            value={sort}
            label="Sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value={"createdAt"}>Oldest Product</MenuItem>
            <MenuItem value={"-createdAt"}>new Product</MenuItem>
            <MenuItem value={"price"}>Cheapest Product</MenuItem>
            <MenuItem value={"-price"}>Most Expensive Product</MenuItem>
            <MenuItem value={"name"}>Name : A-Z</MenuItem>
            <MenuItem value={"-name"}>Name : Z-A</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ width: 300 }}>
          <Slider
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            valueLabelDisplay="auto"
            getAriaValueText={PriceText}
            step={10}
            min={0}
            max={500}
            marks={marks}
          />
        </Box>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          },
          margin: "50px auto",
          gap: "20px",
          padding: "0 5%",
        }}
      >
        {products ? items : skeletonSlides}
      </Box>
    </Box>
  );
}
