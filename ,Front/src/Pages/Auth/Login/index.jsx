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
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Slices/AuthSlice";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "At least 3 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const Login = ({ handlePageType }) => {
  const dispatch=useDispatch()
  const handleSubmit=async(values,{isSubmitting})=>{
    const response=await fetchData("auth/signin",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(values)
    })
    if(response?.success){
      dispatch(login({...response.data}))
      notify("success",response?.message)
    }else{
      notify("error","login failed")
    }
    isSubmitting(false)
  }
  const formik = useFormik({
    initialValues: {
      username: "",
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
          Login
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
              {formik.isSubmitting ? "Login..." : "Login"}
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
              go to Register
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
