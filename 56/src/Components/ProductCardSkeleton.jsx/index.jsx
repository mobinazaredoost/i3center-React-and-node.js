import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Box,
  Button,
} from "@mui/material";

export default function ProductCardSkeleton() {
  return (
    <Card sx={{ height: "420px", width: "100%", boxShadow: 3 }}>
      {/* Image Skeleton */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height="60%"
        animation="wave"
        sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      />

      <CardContent>
        {/* Title */}
        <Skeleton variant="text" width="60%" height={30} animation="wave" />
        {/* Short description */}
        <Skeleton variant="text" width="90%" height={20} animation="wave" />
        <Skeleton variant="text" width="70%" height={20} animation="wave" />
        {/* Price */}
        <Skeleton variant="text" width="40%" height={20} animation="wave" />
      </CardContent>

      <CardActions>
        {/* Learn More Button Skeleton */}
        <Skeleton variant="rounded" width={100} height={36} animation="wave" />
      </CardActions>
    </Card>
  );
}
