import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import fetchData from "../../../Utils/FetchData";
import notify from "../../../Utils/notify";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "At least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const Register = ({ handlePageType }) => {
  const handleSubmit=async(values,{isSubmitting})=>{
    const response=await fetchData("auth/signup",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(values)
    })
    if(response?.success){
      handlePageType()
      notify("success",response?.message)
    }else{
      notify("error","register failed")
    }
    isSubmitting(false)
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit
  });
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          px: 4,
          py: 5,
          mt: 10,
          borderRadius: 4,
          background: "#fdfdfd",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
        >
          Create Account
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />

            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ borderRadius: 2, py: 1.5, mt: 1 }}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? "Registering..." : "Register"}
            </Button>

            <Button
              variant="text"
              size="medium"
              sx={{
                mt: 1,
                color: "primary.main",
                fontWeight: 500,
                textTransform: "none",
              }}
              onClick={handlePageType}
            >
              Already have an account? Login
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
