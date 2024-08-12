import React, { createContext, useState } from 'react';

const Context = createContext<{
    isOpen: (a: string) => boolean;
    setIsOpen: (a: any) => void;
    toggleForm: () => void;
    toggleDisclaimer: () => void;
    toggle: (slug: string) => void;
}>({
    isOpen: (a: string) => false,
    setIsOpen: (a: any) => {},
    toggleForm: () => {},
    toggleDisclaimer: () => {},
    toggle: (slug: string) => {},
});

interface Props {
    children: React.ReactNode;
}

export const Something = ({ children }: Props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const value = {
        setIsFormOpen,

        toggleForm() {
            setIsFormOpen(!isFormOpen);
        },

        isDisclaimerOpen,

        toggleDisclaimer() {
            setIsDisclaimerOpen(!isDisclaimerOpen);
        },

        isOpen(slug = '') {
            switch (slug) {
                case 'form':
                    return isFormOpen;
                case 'disclaimer':
                    return isDisclaimerOpen;
                case 'privacy':
                    return isPrivacyOpen;
                default:
                    return false;
            }
        },

        toggle(slug = '') {
            switch (slug) {
                case 'form':
                    setIsFormOpen(!isFormOpen);
                    break;
                case 'disclaimer':
                    setIsDisclaimerOpen(!isDisclaimerOpen);
                    break;
                case 'privacy':
                    setIsPrivacyOpen(!isPrivacyOpen);
                    break;
            }
            return false;
        },

        setIsOpen: (a: any) => { },

        w: null
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default Context;
