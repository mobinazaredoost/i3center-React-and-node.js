import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Stack,
  Paper,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../Utils/FetchData";
import notify from "../../Utils/notify";
import { login, logout } from "../../Store/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const validationSchema = object({
  username: string()
    .min(3, "Minimum 3 characters")
    .required("Username is required"),
  email: string().email("Invalid email format").required("Email is required"),
});

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const handleSubmit = async (values, { isSubmitting }) => {
    const response = await fetchData(`user/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Brear ${token}`,
      },
      body: JSON.stringify(values),
    });
    if (response?.success) {
      notify("success", response?.message);
      dispatch(login({ ...response.data }));
    } else {
      notify("error", response?.message);
    }
    isSubmitting(false);
  };
  const handleDelete = async () => {
    const response = await fetchData(`user/${user._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Brear ${token}`,
      },
    });
    if (response?.success) {
      notify("success", response?.message);
      dispatch(logout());
    } else {
      notify("error", "not deleted");
    }
    isSubmitting(false);
  };
  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, mt: 8 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Profile Settings
        </Typography>

        <Formik
          initialValues={{ username: user?.username, email: user?.email }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Stack spacing={3}>
                <Field name="username">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Username"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.username && touched.username)}
                      helperText={touched.username && errors.username}
                    />
                  )}
                </Field>

                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      error={Boolean(errors.email && touched.email)}
                      helperText={touched.email && errors.email}
                    />
                  )}
                </Field>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  mt={2}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Update Account
                  </Button>
                  <Button
                    onClick={handleDelete}
                    variant="outlined"
                    color="error"
                    fullWidth
                  >
                    Delete Account
                  </Button>
                </Stack>

                <Button
                  variant="text"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={()=>navigate(-1)}
                >
                  Back to Home
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Profile;
