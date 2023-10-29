import React from "react";
import ReactDOMClient from "react-dom/client";
import { Desktop } from "./screens/Desktop";
import { Phone } from "./screens/Phone";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <>
    <Desktop />
    <Phone />
    <div id="subscribe" className="subscribe-anchor"></div>
  </>
);
