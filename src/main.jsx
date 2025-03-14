import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-gggkko07tnqd2zmc.us.auth0.com"
      clientId="PjxCs2yHVdik2SaBsJzMQF9KkgkBqwL3"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </StrictMode>
);
