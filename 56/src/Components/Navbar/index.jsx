import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../../Store/Slices/AuthSlice";

// Styled Badge for cart
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#ff6b6b",
    color: "white",
    fontWeight: 600,
  },
}));

// Cart Badge component
export function CustomizedBadges({ count }) {
  return (
    <IconButton aria-label="cart" sx={{ color: "#ffffff" }}>
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

// Navbar component
export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.list).length;
  const dispatch = useDispatch();

  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px="5%"
      sx={{
        backgroundColor: "#2B2E4A",
        height: "70px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left Section: Logo + Navigation */}
      <Stack direction="row" spacing={3} alignItems="center">
        <Typography variant="h5" sx={{ color: "#FCD581", fontWeight: "bold" }}>
          I3Center
        </Typography>
        {[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products/all/all-category" },
          { label: "About", to: "/about" },
          { label: "Contact", to: "/contact" },
        ].map((item) => (
          <Link to={item.to} key={item.label}>
            <Button sx={{ color: "#D3CCE3", textTransform: "none" }}>
              {item.label}
            </Button>
          </Link>
        ))}
        {token ? (
          <Button
            onClick={() => dispatch(logout())}
            variant="outlined"
            color="error"
            size="small"
          >
            Logout
          </Button>
        ) : (
          <Link to="/auth">
            <Button sx={{ color: "#D3CCE3", textTransform: "none" }}>
              Login/Register
            </Button>
          </Link>
        )}
      </Stack>

      {/* Right Section: Search + Cart + Profile */}
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          variant="standard"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#ffffff" }} />
              </InputAdornment>
            ),
            disableUnderline: true,
            sx: {
              color: "white",
              backgroundColor: "#40446D",
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              fontSize: "14px",
            },
          }}
          InputLabelProps={{
            style: { color: "#ffffffb0" },
          }}
          sx={{
            width: 200,
          }}
        />
        <Link to="/cart">
          <CustomizedBadges count={cartLength} />
        </Link>
        {token && (
          <Link to="/profile">
            <AccountCircleIcon sx={{ color: "#FCD581", fontSize: 30 }} />
          </Link>
        )}
      </Stack>
    </Stack>
  );
}
