import { render } from "react-dom";
import { App } from "./App";
import { StoreProvider } from "./app/StoreProvider/index";
import './app/styles/index.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { StepFirst } from "./pages/StepFirst";

render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)