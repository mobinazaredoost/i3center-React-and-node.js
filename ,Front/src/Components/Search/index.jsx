import { BorderBottom } from "@mui/icons-material";
import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search({ id, name, img, type }) {
  const navigate = useNavigate();
  //   const handleClick = navigate(
  //     `${
  //       type == "product"
  //         ? `/product-details/${id}/${name.replaceAll(" ", "-")}`
  //         : `/products/${id}/${name.replaceAll(" ", "-")}`
  //     }`
  //   );
  return (
    <Stack
      component={Link}
      to={`${
        type == "product"
          ? `/product-details/${id}/${name.replaceAll(" ", "-")}`
          : `/products/${id}/${name.replaceAll(" ", "-")}`
      }`}
      flexDirection={"row"}
      px={"3%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      height={"50px"}
      BorderBottom={"1px solid black"}
    >
      <Box
        component={"img"}
        src={import.meta.env.VITE_BASE_URL + img}
        alt={name}
        style={{ width: "40px", height: "40px" }}
      />
      <Typography variant="h4" fontSize={"14px"}>
        {name}
      </Typography>
    </Stack>
  );
}
