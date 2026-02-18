import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 4, md: 8 },
          borderRadius: 6,
          textAlign: "center",
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.7)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          maxWidth: 600,
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h2"}
          fontWeight={800}
          color="primary"
          gutterBottom
        >
          404
        </Typography>
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
        >
          Oops! Page Not Found
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          The page you're looking for doesn't exist or was moved.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 5,
            fontWeight: 600,
            textTransform: "none",
            fontSize: 16,
          }}
        >
          Go Back Home
        </Button>
      </Paper>
    </Box>
  );
};

export default NotFound;
