import classNames from "classnames";
import cls from "./MainPage.module.scss";
import { Input } from "../../../shared/ui/Input/Input";
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type IFormInputs = {
    Phone: string;
    Email: string;
}

export const MainPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    })

    const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);
    return (
        <div className={classNames(cls.MainPage, {}, [])}>
            <div className={cls.About}>
                <div className={cls.About__avatar}></div>
                <div className={cls.About__info}>
                    <p className={cls.About__info_name}>Новиков Андрей</p>
                    <ul className={cls.About__info_contacts}>
                        <li className={cls.About__info_item}><a href="https://t.me/slientHippo" target="_blank"><img src=''></img> Telegram</a></li>
                        <li className={cls.About__info_item}><a href="https://github.com/silentHippo01" target="_blank"><img src=''></img> GitHub</a></li>
                        <li className={cls.About__info_item}><a href="https://hh.ru/resume/ac8e8076ff0b90496e0039ed1f34686a596258" target="_blank"><img src=''></img> Resume</a></li>
                    </ul>
                </div>
            </div>

            <div className={cls.MainPage__form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputForm_wrap'>
                        <label className='inputForm__label' htmlFor=''>Телефон</label>
                        <input
                            className='inputForm'
                            placeholder='+7 999 999-99-99'
                            {...register('Phone')}
                        />
                    </div>

                    <div className='inputForm_wrap'>
                        <label className='inputForm__label' htmlFor=''>Email</label>
                        <input
                            className='inputForm'
                            placeholder='+7 999 999-99-99'
                            {...register('Email')}
                        />
                    </div>

                    <Button
                        text="Начать"
                        idBtn="button-start"
                        theme={ButtonTheme.PRIMARY}
                        onClick={() => { console.log('hello') }}
                    />

                </form>
            </div>
        </div>
    );
};