import { useState } from "react";

const useModal = (props) => {
    const [modalState, setModalState] = useState(props);

    const close = () => {
        setModalState(false);
    };

    const open = () => {
        setModalState(true);
    };

    return {
        modalState,
        open,
        close,
    };
};

export default useModal;
