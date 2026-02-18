import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h3" fontWeight={700} textAlign="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        color="text.secondary"
        mb={6}
      >
        We'd love to hear from you! Fill out the form or reach us directly.
      </Typography>

      <Grid container spacing={6}>
        {/* Contact Info */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            }}
          >
            <Stack spacing={4}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton color="primary" size="large">
                  <PhoneIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Phone
                  </Typography>
                  <Typography color="text.secondary">+1 (555) 123-4567</Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton color="primary" size="large">
                  <EmailIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Email
                  </Typography>
                  <Typography color="text.secondary">info@example.com</Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton color="primary" size="large">
                  <LocationOnIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Address
                  </Typography>
                  <Typography color="text.secondary">
                    123 Main Street, City, Country
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            }}
          >
            <Stack spacing={3}>
              <TextField fullWidth label="Full Name" variant="outlined" />
              <TextField fullWidth label="Email" variant="outlined" />
              <TextField fullWidth label="Subject" variant="outlined" />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={5}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "40px", fontWeight: 600, px: 6 }}
              >
                Send Message
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
