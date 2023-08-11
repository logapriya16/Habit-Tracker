import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidenav from "../../components/sidenav";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <div className="center_area"></div>
    </div>
  );
}
