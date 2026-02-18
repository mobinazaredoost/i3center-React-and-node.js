import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        px: "5%",
        py: { xs: 6, md: 10 },
        backgroundColor: "#2B2E4A",
        color: "#D3CCE3",
        margin:"50px"
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        alignItems="center"
      >
        {/* Left: Image */}
        <Box
          component="img"
          src="/about-image.jpg" // replace with your own image
          alt="About I3Center"
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: 3,
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
            objectFit: "cover",
          }}
        />

        {/* Right: Text Content */}
        <Box flex={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#FCD581",
              mb: 2,
            }}
          >
            About I3Center
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            At I3Center, we believe shopping should be as inspiring as it is
            convenient. From carefully curated products to seamless online
            experiences, our mission is to deliver value, quality, and
            unforgettable service — every time.
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: "#B0B5D1" }}>
            Join thousands of happy customers and experience innovation, style,
            and service that goes beyond the ordinary.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#FCD581",
              color: "#2B2E4A",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#e8bc5c",
              },
            }}
          >
            Explore Products
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
