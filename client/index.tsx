import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from './App';
import store from "./src/redux/store";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background: #16BFFD;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #CB3066, #16BFFD);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #CB3066, #16BFFD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100vh;
  }
`
  
const root = createRoot(document.getElementById("root")!);
root.render(
   
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
                <GlobalStyle />                       
                <App />                
            </Provider>
        </StrictMode>
    </BrowserRouter>
);
