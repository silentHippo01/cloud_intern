import { FC } from "react";

interface AppProps {
    children?: JSX.Element;
}

export const App: FC<AppProps> = () => {

    return (
        <div className={`app`}>
            hello   
        </div>
    );
};
