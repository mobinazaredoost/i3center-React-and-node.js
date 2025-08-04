import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard, ProductCardSkeleton } from "../../../Components";
import fetchData from "../../../Utils/FetchData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function CheapestProducts() {
  const [cheapest, setCheapest] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData("product?sort=price&limit=5");
      setCheapest(response.data);
    })();
  }, []);
  const items = cheapest?.map((e, index) => (
    <SwiperSlide key={index}>
      <ProductCard
        img={e.images[0]}
        name={e?.name}
        price={e?.price}
        id={e._id}
        desc={e?.description}
      />
    </SwiperSlide>
  ));
  const skeletonSlides = Array(5)
    .fill(0)
    .map((_, index) => (
      <SwiperSlide key={index}>
        <ProductCardSkeleton />
      </SwiperSlide>
    ));
  return (
    <>
      <Box
        sx={{
          width: "95%",
          margin: "50px auto",
          padding: "20px 5%",
          borderRadius: "20px",
          backgroundColor: "steelblue",
        }}
      >
        <Typography
          mb={"20px"}
          variant="h3"
          textAlign={"center"}
          sx={{ color: "white" }}
        >
          Cheapest Products
        </Typography>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="cheapest-products"
        >
          {cheapest?items:skeletonSlides}
        </Swiper>
      </Box>
    </>
  );
}
