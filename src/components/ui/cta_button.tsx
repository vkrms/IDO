// cta button component
import ContextProvider from '@/components/provider/context_provider';
import { useContext } from 'react';

interface Props {
    children: React.ReactNode
}

export const CtaButton: React.FC<Props> = ({ children }) => {
    const context = useContext(ContextProvider);

    const handleCTAbutton = () => {
        context.toggleForm();
    }

    return (
        <a onClick={handleCTAbutton}>
            {children}
        </a>
    )
}