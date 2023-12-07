import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Box } from "@mui/material";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
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
          <SignIn updateIsSignIn={(currState) => setIsSignIn(currState)} />
        ) : (
          <SignUp updateIsSignIn={(currState) => setIsSignIn(currState)} />
        )}
      </Box>
    </>
  );
}

export default App;
