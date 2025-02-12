import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ThemeProvider } from "components/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <div className="min-h-screen min-w-screen p-0 m-0">
        <ThemeProvider defaultTheme="dark" storageKey="shadcn-ui-theme">
            <StrictMode>
                <App />
            </StrictMode>
        </ThemeProvider>
    </div>,
);
