import React from "react";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableFooter,
  TableRow,
  Tooltip,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, clear } from "../../Store/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${TableCell.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 16,
  },
  [`&.${TableCell.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, totalPrice } = useSelector((state) => state.cart);

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <Box px={{ xs: 2, md: 4 }} mt={5}>
      {list.length > 0 ? (
        <>
          <Typography variant="h4" fontWeight={600} mb={2}>
            🛒 Your Shopping Cart
          </Typography>
          <TableContainer
            component={Paper}
            elevation={5}
            sx={{ borderRadius: 3 }}
          >
            <Table sx={{ minWidth: 750 }} aria-label="cart table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">ID</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Image</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">Quantity</StyledTableCell>
                  <StyledTableCell align="center">Total</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {list.map((item, index) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell align="center">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Avatar
                        variant="rounded"
                        src={import.meta.env.VITE_BASE_URL + item.images[0]}
                        alt={item.name}
                        sx={{ width: 56, height: 56, mx: "auto" }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {formatPrice(item.price)}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.cartQuantity}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {formatPrice(item.price * item.cartQuantity)}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Tooltip title="Increase Quantity">
                          <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick={() => dispatch(add(item))}
                            disabled={item.quantity <= item.cartQuantity}
                            sx={{
                              minWidth: 40,
                              borderRadius: "50%",
                              fontWeight: "bold",
                              px: 0,
                              fontSize: 20,
                            }}
                          >
                            +
                          </Button>
                        </Tooltip>

                        <Tooltip title="Decrease Quantity">
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            onClick={() => dispatch(remove(item))}
                            sx={{
                              minWidth: 40,
                              borderRadius: "50%",
                              fontWeight: "bold",
                              px: 0,
                              fontSize: 20,
                            }}
                          >
                            –
                          </Button>
                        </Tooltip>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell colSpan={5} align="right">
                    <Typography variant="h6" fontWeight={600}>
                      Total:
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    <Typography
                      variant="h6"
                      color="success.main"
                      fontWeight={700}
                    >
                      {formatPrice(totalPrice)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>

          <Box
            mt={3}
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={2}
          >
            <Button
              onClick={() => navigate("/products/all/all-category")}
              variant="outlined"
              color="primary"
              size="large"
              sx={{ textTransform: "none", px: 4 }}
            >
              Continue Shopping
            </Button>
            <Button
              onClick={() => navigate("/products/all/all-category")}
              variant="outlined"
              color="primary"
              size="large"
              sx={{ textTransform: "none", px: 4 }}
            >
              Go to payment
            </Button>
            <Button
              onClick={() => dispatch(clear())}
              variant="contained"
              color="error"
              size="large"
              sx={{ textTransform: "none", px: 4 }}
            >
              Clear Cart
            </Button>
          </Box>
        </>
      ) : (
        <Stack alignItems="center" spacing={3} mt={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center">
            🛍️ Your Cart is Empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/products/all/all-category")}
            sx={{ textTransform: "none", px: 4, py: 1.2 }}
          >
            Start Shopping
          </Button>
        </Stack>
      )}
    </Box>
  );
}
