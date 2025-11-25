import React from "react";
import ReactDOM from "react-dom/client"

import "./index.css"
import App from "./App.tsx"

const root: ReactDOM.Root = ReactDOM.createRoot(document.querySelector("#root")!);
root.render(<React.StrictMode><App /></React.StrictMode>);