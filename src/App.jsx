import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn) {
    return (
      <>
        <Box>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "#0C356A", fontWeight: 550 }}
          >
            Loggedin Successfully!
          </Typography>
          <Link
            href="#"
            variant="body2"
            onClick={() => {
              setIsLoggedIn(false);
              setIsSignIn(true);
            }}
          >
            Go back to login page
          </Link>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          border: 2,
          borderColor: "primary.main",
          pb: 2,
          borderRadius: 2,
        }}
      >
        {isSignIn ? (
          <SignIn
            updateIsSignIn={(currState) => setIsSignIn(currState)}
            updateIsLoggedIn={(currState) => setIsLoggedIn(currState)}
          />
        ) : (
          <SignUp
            updateIsSignIn={(currState) => setIsSignIn(currState)}
            updateIsLoggedIn={(currState) => setIsLoggedIn(currState)}
          />
        )}
      </Box>
    </>
  );
}

export default App;
