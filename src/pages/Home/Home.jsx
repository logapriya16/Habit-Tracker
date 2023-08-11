import React from "react";
import Sidenav from "../../components/sidenav";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <div className="center_area"></div>
    </div>
  );
}
