import classNames from "classnames";
import cls from './StepThird.module.scss'
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type IFormInputs = {
    About: string;
}
const schema: yup.ObjectSchema<IFormInputs> = yup.object().shape({
    About: yup
    .string()
    .required('Обязательное поле'),
})

export const StepThird = () => {

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
    };

    const onBack = () => {
        navigate('/second')
    }

    return (
        <div className={classNames(cls.StepThird, {}, ["page"])}>
            <div className="progress-container">
                <div className="progress-bar-2"></div>
                <div className="progress-bar-dot progress-bar-dot-start checked">&#10003;</div>
                <div className="progress-bar-dot progress-bar-dot-center checked" >&#10003;</div>
                <div className="progress-bar-dot progress-bar-dot-end active" ><div className="small-dot"></div></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='inputForm_wrap'>
                    <label className='inputForm__label' htmlFor=''>About</label>
                    <p>{errors.About?.message}</p>
                    <textarea
                        className='textAreaForm'
                        placeholder=''
                        id="field-nickname"
                        {...register('About')}
                    />
                </div>

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
    )
};
