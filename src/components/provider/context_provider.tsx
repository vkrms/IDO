import React, { createContext, useState } from 'react';

const Context = createContext({
    isOpen: (a: string) => {},
    setIsOpen: (a: any) => { },
    toggleForm: () => { },
    toggleDisclaimer: () => { },    
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
        }
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default Context;
