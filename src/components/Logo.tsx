import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>
        <img src="/assets/items/logo-final.png" />
      </button>
    </>
  );
}
