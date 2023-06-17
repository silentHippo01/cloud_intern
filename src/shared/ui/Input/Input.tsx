import classNames from "classnames";
import { FC, forwardRef } from "react";
import cls from './Input.module.scss';

interface InputProps {
    className?: string;
    label?: string;
    id?: string;
    placeholder?: string;
    name?: string;
    register?: any; 
}

export const Input = (props: InputProps)=> {
    const {
        className,
        label,
        id,
        placeholder,
        name,
        ...rest
    } = props;

    return (
        <div className={cls.Input__wrap}>
            <label className={cls.label} htmlFor={id}>{label}</label>
            <input
                className={classNames(cls.Input, {}, [className])}
                id={id}
                placeholder={placeholder}
                {...rest}
            />
        </div>
            
    );
};

