import { render } from "react-dom";
import { App } from "./App";
import { StoreProvider } from "./app/StoreProvider/index";
import './app/styles/index.scss'

render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root'),
)