import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Box } from "@mui/material";
import fetchData from "../../../Utils/FetchData";

export default function CategorySection() {
  const [category, setCategory] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData("category");
      setCategory(response.data);
    })();
  }, []);
  const items = category?.map((e, index) => (
    <CategoryCard img={e?.image[0]} title={e?.title} id={e._id} />
  ));
  return (
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
      {items}
    </Box>
  );
}
