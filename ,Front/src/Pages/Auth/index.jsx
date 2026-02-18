import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

export default function Auth() {
  const [pageType, setPageType] = useState("register");
  const handlePageType = () => {
    setPageType(pageType == "login" ? "register" : "login");
  };
  return (
    <>
      {pageType == "login" ? (
        <Login handlePageType={handlePageType} />
      ) : (
        <Register handlePageType={handlePageType}/>
      )}
    </>
  );
}
