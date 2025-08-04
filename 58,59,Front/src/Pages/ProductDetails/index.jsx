import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Stack,
  Button,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/FetchData";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../Store/Slices/CartSlice";

const ProductDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

  const productCartQuantity = useSelector((state) => state.cart.list).filter(e => e._id == id)[0]?.cartQuantity;

  useEffect(() => {
    (async () => {
      const response = await fetchData(`product/${id}?populate=categoryId`);
      setProduct(response?.data);
    })();
  }, [id]);

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 1400, mx: "auto" }}>
      <Grid container spacing={6} alignItems="center">
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            }}
          >
            <CardMedia
              component="img"
              image={`${import.meta.env.VITE_BASE_URL}${product?.images[0]}`}
              alt={product?.name}
              sx={{
                width: "100%",
                height: isMobile ? 300 : 500,
                objectFit: "cover",
              }}
            />
          </Paper>
        </Grid>

        {/* Details */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h3" fontWeight={700}>
                {product?.name}
              </Typography>
              <Chip
                label={product?.categoryId.title}
                color="secondary"
                variant="outlined"
                sx={{ mt: 1, fontWeight: 500 }}
              />
            </Box>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: 18 }}
            >
              {product?.description}
            </Typography>

            <Typography variant="h4" color="primary" fontWeight={600}>
              ${product?.price.toFixed(2)}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: product?.quantity > 0 ? "green" : "error.main",
                fontWeight: 500,
              }}
            >
              {product?.quantity > 0
                ? `${product?.quantity} item${
                    product?.quantity > 1 ? "s" : ""
                  } available`
                : "Out of stock"}
            </Typography>

            {/* Updated Cart Buttons */}
            {productCartQuantity ? (
              <Stack direction="row" alignItems="center" spacing={2}>
                <Tooltip title="Increase Quantity">
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={()=>dispatch(add(product))}
                    disabled={product?.quantity <= productCartQuantity}
                    sx={{
                      minWidth: 40,
                      px: 0,
                      borderRadius: "50%",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    +
                  </Button>
                </Tooltip>

                <Typography
                  variant="h6"
                  sx={{ minWidth: 30, textAlign: "center", fontWeight: 500 }}
                >
                  {productCartQuantity}
                </Typography>

                <Tooltip title="Decrease Quantity">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="medium"
                    onClick={()=>dispatch(remove(product))}
                    sx={{
                      minWidth: 40,
                      px: 0,
                      borderRadius: "50%",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    –
                  </Button>
                </Tooltip>
              </Stack>
            ) : (
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={()=>dispatch(add(product))}
                startIcon={<ShoppingCartIcon />}
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: "40px",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: 16,
                }}
                disabled={product?.quantity <= 0}
              >
                Add to Cart
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
