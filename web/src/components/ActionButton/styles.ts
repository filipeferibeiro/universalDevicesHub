import styled from 'styled-components';

interface ButtonProps {
    bgColor: string;
    header?: boolean;
}

export const ActionButton = styled.button<ButtonProps>`
    flex: 1;
    background: ${p => p.bgColor};
    border: 1px solid;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 200px;
    padding: 8px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #DDD;

    transition: opacity 0.2s;

    cursor: pointer;

    :hover {
        opacity: 70%;
    }

    ${p => p.header && `
        flex: 0;
        padding: 8px 16px;
    `}
    
    @media (min-width: 800px) {
        flex: 0;
        padding: 8px 16px;
    }

`;