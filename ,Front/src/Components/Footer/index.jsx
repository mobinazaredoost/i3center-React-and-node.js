import React from "react";
import { Box, Typography, Stack, Link as MuiLink, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#2B2E4A", color: "#D3CCE3", pt: 6, pb: 3, px: "5%" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={4}
      >
        {/* Logo and About */}
        <Box flex={1}>
          <Typography variant="h6" sx={{ color: "#FCD581", fontWeight: "bold", mb: 1 }}>
            I3Center
          </Typography>
          <Typography variant="body2">
            Empowering your shopping experience with quality and care.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box flex={1}>
          <Typography variant="h6" sx={{ color: "#FCD581", fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          {["Home", "Products", "About", "Contact", "Login/Register"].map((item) => (
            <MuiLink
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              underline="none"
              color="#D3CCE3"
              sx={{ display: "block", mb: 0.5, fontSize: 14 }}
              key={item}
            >
              {item}
            </MuiLink>
          ))}
        </Box>

        {/* Contact Info */}
        <Box flex={1}>
          <Typography variant="h6" sx={{ color: "#FCD581", fontWeight: "bold", mb: 1 }}>
            Contact Us
          </Typography>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+1 (123) 456-7890</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">support@i3center.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">1234 Innovation Blvd, Tech City</Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Social Media */}
        <Box flex={1}>
          <Typography variant="h6" sx={{ color: "#FCD581", fontWeight: "bold", mb: 1 }}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton href="#" sx={{ color: "#FCD581" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#FCD581" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#FCD581" }}>
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ backgroundColor: "#D3CCE3", my: 4 }} />

      {/* Copyright */}
      <Typography variant="body2" align="center" sx={{ color: "#888" }}>
        © {new Date().getFullYear()} I3Center. All rights reserved.
      </Typography>
    </Box>
  );
}
