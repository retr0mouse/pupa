import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from './App';
import store from "./src/redux/store";

const root = createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    </BrowserRouter>
);
