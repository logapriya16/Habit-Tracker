import React from "react";
import Sidenav from "../../Components/sidenav";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <div className="center_area"></div>
    </div>
  );
}
