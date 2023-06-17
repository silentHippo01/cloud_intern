import { FC } from "react";
import { MainPage } from "./pages/MainPage";
import { StepFirst } from "./pages/StepFirst";
import { StepSecond } from "./pages/StepSecond";
import { StepThird } from "./pages/StepThird";
import { Route, Routes } from "react-router-dom";

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {

    return (
        <div className={`app`}>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/first" element={<StepFirst />}/>
                <Route path="/first" element={<StepFirst />}/>
                <Route path="/first" element={<StepFirst />}/>
            </Routes>
        </div>
    );
};
