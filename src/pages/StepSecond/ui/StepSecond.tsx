import classNames from "classnames";
import cls from './StepSecond.module.scss'
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type IFormInputs = {
    
}
const schema: yup.ObjectSchema<IFormInputs> = yup.object().shape({

})


export const StepSecond = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        defaultValues: {

        }
    })

    const onSubmit: SubmitHandler<IFormInputs> = data => {
        console.log(data)
        navigate('/third')
    };

    const onBack = () => {
        navigate('/first')
    }



    return (
        <div className={classNames(cls.StepSecond, {}, ["page"])}>
            <div className="progress-container">
                <div className="progress-bar-1"></div>
                <div className="progress-bar-dot progress-bar-dot-start checked">&#10003;</div>
                <div className="progress-bar-dot progress-bar-dot-center active" ><div className="small-dot"></div></div>
                <div className="progress-bar-dot progress-bar-dot-end" ></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="form__buttons">
                    <Button
                        text="Назад"
                        idBtn="button-back"
                        theme={ButtonTheme.OUTLINE}
                        type="button"
                        onClick={onBack}
                    />

                    <Button
                        text="Далее"
                        idBtn="button-start"
                        theme={ButtonTheme.PRIMARY}
                        type="submit"
                    />

                </div>
            </form>
        </div>


    );
};
