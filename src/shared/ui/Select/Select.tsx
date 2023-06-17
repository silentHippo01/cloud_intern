import { useState } from "react";

type Option = { title: string; value: string };
type SelectProps = {
    selected: Option | null;
    options: Option[];
    placeholder?: string;
    mode?: 'rows' | 'cells';
    status?: 'default' | 'invalid';
    onChange?: (selected: Option['value']) => void;
    onClose?: () => void;
  };

export const Select = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            
        </div>
    );
};
