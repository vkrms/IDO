import React, { createContext, useState } from 'react';

const Context = createContext({
    isOpen: false,
    setIsOpen: (a: any) => { },
    toggleModal: () => { },
});

interface Props {
    children: React.ReactNode;
}

export const Something = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Context.Provider value={{ isOpen, setIsOpen, toggleModal }}>
            {children}
        </Context.Provider>
    );
};

export default Context;
