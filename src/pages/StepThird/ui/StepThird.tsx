import classNames from "classnames";
import cls from './StepThird.module.scss'
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResultModal } from "../../../shared/ui/ResultModal/ResultModal";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { formActions } from "../../../app/FormModel/slice/formSlice";
import { sendData } from "../../../app/FormModel/services/sendFormData";

type IFormInputs = {
    About: string;
}
const schema: yup.ObjectSchema<IFormInputs> = yup.object().shape({
    About: yup
    .string()
    .required('Обязательное поле'),
})

export const StepThird = () => {
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

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

    const onSubmit: SubmitHandler<IFormInputs> = async data => {
        dispatch(formActions.addData(data));
        const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    };

    const onBack = () => {
        navigate('/second')
    }

    const onCloseModal  = useCallback(() => {
        setIsOpen(false);
    }, []);

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
                        text="Отправить"
                        idBtn="button-start"
                        theme={ButtonTheme.PRIMARY}
                        type="submit"
                    />

                </div>
            </form>

            {
                isOpen && (
                    <ResultModal 
                        isOpen={isOpen}
                        onClose={onCloseModal}
                    />
                )
            }
        </div>
    )
};
