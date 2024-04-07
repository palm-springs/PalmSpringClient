import { ReactNode } from 'react';
import styled from 'styled-components';

const Message = ({ children } : {children : ReactNode}) => {
    return (
        <Text>
            {children}
        </Text>
    );
};

export default Message;

const Text = styled.div`
    ${({ theme }) => theme.fonts.Caption};
    
    /* animation: fadeInDown 0.7s; */
    color: ${({ theme }) => theme.colors.red_hover};

    /* @keyframes fadeInDown {
        0% {
            transform: translate3d(0, -100%, 0);
            opacity: 0.5;
        }
        to {
            transform: translateZ(0);
            opacity: 1;
        }
    } */
 
`;
