import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ToDo } from "./ToDo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ToDo />
  </StrictMode>
);
