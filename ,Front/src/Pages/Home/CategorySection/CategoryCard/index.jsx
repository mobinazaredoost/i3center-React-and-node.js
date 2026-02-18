import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ img, title, id }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          position: "relative",
          boxShadow: "0 0 5px 2px rgba(0,0,0,.2)",
          borderRadius: "20px",
          overflow: "hidden",
          "&  a": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            transition: "all .5s",
            textDecoration: "none !important",
            fontSize: "32px",
            color: "white",
            opacity: "0",
            visibility: "hidden",
          },
          "&:hover  a": {
            opacity: "1 !important",
            visibility: "visible !important",
          },
          "&  img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all .5s",
          },
          "&:hover  img": {
            filter: "brightness(50%)",
          },
        }}
      >
        <Box
          component={"img"}
          src={import.meta.env.VITE_BASE_URL + img}
          alt={title}
        />
        <Link to={`/products/${id}/${title.replaceAll(" ", "-")}`}>
          {title}
        </Link>
      </Box>
    </>
  );
}
