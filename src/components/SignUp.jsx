import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Copyright from "./Copyright";
import { defaultTheme } from "../constants";
import validateForm from "../utils/validation";
import axios from "axios";

export default function SignUp({ updateIsSignIn, updateIsLoggedIn }) {
  const [isUserExists, setIsUserExists] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let dataObject = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const isValid = await validateForm(dataObject);
    if (isValid) {
      axios
        .post("http://localhost:3001/register", {
          username: dataObject.username,
          email: dataObject.email,
          password: dataObject.password,
        })
        .then((res) => {
          if (res?.data?.err?.errno === 1062) {
            console.log("user already exist");
            setIsUserExists(true);
          } else {
            updateIsLoggedIn(true);
          }
        });
    } else {
      console.log("Is invalid");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            {isUserExists && (
              <Typography sx={{ textAlign: "left", color: "red" }}>
                * User already exists!
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none", py: 1.5 }}
            >
              Sign Up
            </Button>
            <Link href="#" variant="body2" onClick={() => updateIsSignIn(true)}>
              Already have an account?
            </Link>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
