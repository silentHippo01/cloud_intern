import classNames from "classnames";
import cls from './StepSecond.module.scss'
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { DeepPartial, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";

type IFormInputs = {
    advantage: string[];
}
// const schema: yup.ObjectSchema<IFormInputs> = yup.object().shape({
//     advantage: yup.string()
//         .required('Обязательное поле'),
// })

type FormData = {
    advantage: String[];
};

export const StepSecond = () => {

    const navigate = useNavigate();
    const [advantageList, addAdvantageList] = useState(['', '', ''])

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            advantage: [' ', ' ', ' ']
        },
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'advantage',
    });

    const onSubmit = (data: FormData) => {
        console.log(data)
        // navigate('/third')
    };

    const onBack = () => {
        navigate('/first')
    }

    const addAdvantage = () => {
       
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

                <div className='inputForm_wrap'>
                    <label className='inputForm__label' htmlFor=''>Advantage</label>
                    <p>{errors.advantage?.message}</p>

                    {
                        fields.map((field, index) => (
                            <div key={field.id}>
                                <input 
                                    {...register(`advantage.${index}` as const, {required: true})} 
                                    className='inputForm__adv'
                                />
                                <button 
                                    className={cls.delete__advantages}
                                    type="button" 
                                    onClick={() => remove(index)}>
                                    
                                </button>
                            </div>
                        ))
                    }

                </div>

                <button
                    className={cls.add_advantages}
                    onClick={() =>
                        append('')
                      }
                    type="button"
                >
                    &#43;
                </button>

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
