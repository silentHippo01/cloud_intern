import classNames from "classnames";
import cls from './StepFirst.module.scss';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { ISex } from "../../../app/FormModel/types/FormSchema";
import { getFormData } from "../../../app/FormModel/selectors/getFormData";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../app/FormModel/slice/formSlice";
import { memo } from "react";

type IFormInputs = {
    Nickname: string;
    Name: string;
    Surname: string;
    Sex: string;
}

const schema: yup.ObjectSchema<IFormInputs> = yup.object().shape({
    Nickname: yup
        .string()
        .max(30)
        .required('Обязательное поле'),
    Name: yup
        .string()
        .max(50)
        .matches(/^[a-zA-Zа-яА-Я]+$/, 'Только буквы')
        .required('Обязательное поле'),
    Surname: yup
        .string()
        .max(50)
        .matches(/^[a-zA-Zа-яА-Я]+$/, 'Только буквы')
        .required('Обязательное поле'),
    Sex: yup
        .string()
})

export const StepFirst = memo(() => {
    const dispatch = useDispatch();
    const formData = useSelector(getFormData);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            Nickname: formData.Nickname,
            Name: formData.Name,
            Surname: formData.Surname,
            Sex: formData.Sex,
        }
    })

    const onSubmit: SubmitHandler<IFormInputs> = data => {
        dispatch(formActions.addData(data));
        navigate('/second')
    };

    const onBack = () => {
        navigate('/')
    }

    return (
        <div className={classNames(cls.StepFirst, {}, ["page"])}>
            <div className="progress-container">
                <div className="progress-bar"></div>
                <div className="progress-bar-dot progress-bar-dot-start active"><div className="small-dot"></div></div>
                <div className="progress-bar-dot progress-bar-dot-center" ></div>
                <div className="progress-bar-dot progress-bar-dot-end" ></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputForm_wrap'>
                    <label className='inputForm__label' htmlFor=''>Nickname</label>
                    <p>{errors.Nickname?.message}</p>
                    <input
                        className='inputForm'
                        placeholder=''
                        id="field-nickname"
                        {...register('Nickname')}
                    />
                </div>

                <div className='inputForm_wrap'>
                    <label className='inputForm__label' htmlFor=''>Name</label>
                    <p>{errors.Name?.message}</p>
                    <input
                        className='inputForm'
                        placeholder=''
                        id="field-name"
                        {...register('Name')}
                    />
                </div>

                <div className='inputForm_wrap'>
                    <label className='inputForm__label' htmlFor=''>Surname</label>
                    <p>{errors.Surname?.message}</p>
                    <input
                        className='inputForm'
                        placeholder=''
                        id="field-surname"
                        {...register('Surname')}
                    />
                </div>

                <div className='inputForm_wrap'>
                    <label className='inputForm__label' htmlFor=''>Sex</label>
                    <p>{errors.Sex?.message}</p>
                    <select
                        className="select"
                        id="field-sex"
                        {...register('Sex')}
                    >
                        <option className="select__option" value="man" id="field-sex-option-man">{ISex.Man}</option>
                        <option className="select__option" value="woman" id="field-sex-option-woman">{ISex.Woman}</option>
                    </select>
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
    );
});
