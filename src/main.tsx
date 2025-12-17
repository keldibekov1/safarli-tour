import { createRoot } from "react-dom/client";
import React from 'react'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

import App from "./App.tsx";
import "./index.css";


createRoot(document.getElementById("root")!).render(<App />);
