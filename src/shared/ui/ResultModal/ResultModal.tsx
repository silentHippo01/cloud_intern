import classNames from "classnames"
import { Modal } from "../Modal/Modal";
import cls from './ResultModal.module.scss';
import { Button, ButtonTheme } from "../Button/Button";
// import icon from '../../assets/icons/successIcon.png'

interface ResultModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ResultModal = ({ className, isOpen, onClose }: ResultModalProps) => {

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={cls.result}>
                <h1 className={cls.result__title}>Форма успешно отправлена</h1>
                {/* <img className={cls.result__image} src='./../../assets/icons/successIcon.png'></img>
                 */}

                 <div className={cls.result__image}>
                    
                 </div>
                <Button 
                    text="На главную"
                    theme={ButtonTheme.PRIMARY}
                />
            </div>
        </Modal>
    )

}