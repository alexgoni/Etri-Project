import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";

function admin() {
  const [username, setUsername] = useState("");

  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      axios
        .get("/api/check-token", { params: { token } })
        .then((response) => {
          setUsername(response.data.decode.email);
        })
        .catch((error) => {
          console.error("Failed to verify token", error);
        });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div>{username}</div>
      <button>logout</button>
    </>
  );
}

export default admin;
