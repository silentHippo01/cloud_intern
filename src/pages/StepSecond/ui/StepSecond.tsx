import classNames from "classnames";
import cls from './StepSecond.module.scss'
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { DeepPartial, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../../app/FormModel/slice/formSlice";
import { getFormData } from "../../../app/FormModel/selectors/getFormData";

type FormData = {
    advantage: String[];
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
    checkbox4: boolean;
    radioGroup: string;
};

export const StepSecond = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formData = useSelector(getFormData);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            advantage: formData.advantage,
            checkbox1: formData.checkbox1,
            checkbox2: formData.checkbox2,
            checkbox3: formData.checkbox3,
            checkbox4: formData.checkbox4,
            radioGroup: formData.radioGroup,
        },
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'advantage',
    });

    const onSubmit:SubmitHandler<FormData> = (data) => {
        dispatch(formActions.addData(data));
        navigate('/third');
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
                <div className='inputForm_wrap'>
                    <label className='inputForm__label' htmlFor=''>Advantage</label>
                    <p>{errors.advantage?.message}</p>

                    {
                        fields.map((field, index) => (
                            <div key={field.id}>
                                <input
                                    {...register(`advantage.${index}` as const, { required: true })}
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

                <div className={cls.checkboxGroup}>
                    <p>Checkbox Group</p>
                    <div>
                        <input
                            className={cls.checkbox}
                            type='checkbox'
                            id="field-checkbox-group-option-1"
                            {...register('checkbox1')}
                        />
                        <label htmlFor="field-checkbox-group-option-1" className={cls.label}>1</label>
                    </div>

                    <div>
                        <input
                            className={cls.checkbox}
                            type='checkbox'
                            id="field-checkbox-group-option-2"
                            {...register('checkbox2')}
                        />
                        <label htmlFor="field-checkbox-group-option-2" className={cls.label}>2</label>

                    </div>

                    <div>
                        <input
                            className={cls.checkbox}
                            type='checkbox'
                            id="field-checkbox-group-option-3"
                            {...register('checkbox3')}
                        />
                        <label htmlFor="field-checkbox-group-option-3" className={cls.label}>3</label>
                    </div>

                    <div>
                        <input
                            className={cls.checkbox}
                            type='checkbox'
                            id="field-checkbox-group-option-4"
                            {...register('checkbox4')}
                        />
                        <label htmlFor="field-checkbox-group-option-4" className={cls.label}>4</label>
                    </div>

                </div>

                <div className={cls.radioGroup}>
                    <p>Radio group</p>
                    <div>
                        <input
                            type="radio"
                            id="field-radio-group-option-1"
                            name="radioGroup"
                            value="1"
                            {...register('radioGroup')}
                        />
                        <label htmlFor="field-radio-group-option-1" className={cls.label}>1</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="field-radio-group-option-2"
                            name="radioGroup"
                            value="2"
                            {...register('radioGroup')}
                        />
                        <label htmlFor="field-radio-group-option-2" className={cls.label}>2</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="field-radio-group-option-3"
                            name="radioGroup"
                            value="3"
                            {...register('radioGroup')}
                        />
                        <label htmlFor="field-radio-group-option-3" className={cls.label}>3</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="field-radio-group-option-4"
                            name="radioGroup"
                            value="4"
                            {...register('radioGroup')}
                        />
                        <label htmlFor="field-radio-group-option-4" className={cls.label}>4</label>
                    </div>

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
};
