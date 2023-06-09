import classNames from "classnames";
import { FC, ReactNode } from "react";
import cls from './Button.module.scss';

interface ButtonProps {
    className?: string;
    text?: string;
    idBtn?: string;
    theme?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;  
}

export enum ButtonTheme {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
}

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        text,
        idBtn,
        theme = ButtonTheme.PRIMARY,
        disabled,
        type,
        onClick,
        ...otherProps
    } = props;

    const mods: Record<string, boolean | string | undefined> = {
        [cls[theme]]:true,
        [cls.disabled]:disabled,
    }
    

    return (
        <>
            <button
                className={classNames(cls.Button, mods, [className])}
                id={idBtn}
                disabled={disabled}
                type={type}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    );
};
