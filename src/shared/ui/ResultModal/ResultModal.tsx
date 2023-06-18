import classNames from "classnames"
import { Modal } from "../Modal/Modal";
import cls from './ResultModal.module.scss';
import { Button, ButtonTheme } from "../Button/Button";
import { useSelector } from "react-redux";
import { getSuccess } from "../../../app/FormModel/selectors/getSuccess";
import { useNavigate } from "react-router-dom";

interface ResultModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ResultModal = ({ className, isOpen, onClose }: ResultModalProps) => {

    const result = useSelector(getSuccess);
    const navigate = useNavigate();

    const onBack = () => {
        navigate('/')
    }

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >

            {
                 result === true ? (
                    <div className={cls.result}>
                        <h1 className={cls.result__title}>Форма успешно отправлена</h1>
                        <div className={cls.result__image_success}></div>
                        <Button
                            text="На главную"
                            theme={ButtonTheme.PRIMARY}
                        />
                    </div>
                ) : (
                    <div className={cls.result}>
                        <h1 className={cls.result__title}>Ошибка</h1>
                        <div className={cls.result__image_failed}></div>
                        <Button
                            type="button"
                            text="На главную"
                            theme={ButtonTheme.PRIMARY}
                            onClick={onBack}
                        />
                    </div>
                )
            }


        </Modal>
    )

}