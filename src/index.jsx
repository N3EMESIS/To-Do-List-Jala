import React from "react";
import ReactDOMClient from "react-dom/client";
import { DarkMode } from "./screens/DarkMode";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DarkMode />);
