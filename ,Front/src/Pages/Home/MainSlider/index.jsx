import React, { useEffect, useState } from "react";
import { Box ,Skeleton} from "@mui/material";
import fetchData from "../../../Utils/FetchData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function MainSlider() {
  const [sliders, setSliders] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData("slider");
      setSliders(response.data);
    })();
  }, []);
  const items = sliders?.map((e, index) => (
    <SwiperSlide key={index}>
      <img src={import.meta.env.VITE_BASE_URL + e?.image} alt={e?.title} />
    </SwiperSlide>
  ));
  const skeletonSlides = Array(3)
    .fill(0)
    .map((_, index) => (
      <SwiperSlide key={index}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="70vh"
          animation="wave"
        />
      </SwiperSlide>
    ));
  return (
    <Box sx={{ height: "80vh" }}>
      {" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner"
      >
        {sliders?items:skeletonSlides}
      </Swiper>
    </Box>
  );
}
