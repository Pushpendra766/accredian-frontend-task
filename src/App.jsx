import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <>
      {isSignIn ? (
        <SignIn updateIsSignIn={(currState) => setIsSignIn(currState)} />
      ) : (
        <SignUp updateIsSignIn={(currState) => setIsSignIn(currState)} />
      )}
    </>
  );
}

export default App;
