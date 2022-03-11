import styled from 'styled-components';
import { IconButtonStyleProps } from './iconButton';

export const Container = styled.button<IconButtonStyleProps>`
    background: transparent;
    ${p => !p.simple && `
        width: ${p.size + 12}px;
        height: ${p.size + 12}px;
    `}

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 300px;
    border: none;

    transition: all 0.2s;

    cursor: pointer;

    :hover {
        ${p => p.simple ? `opacity: 60%` : `background: #6C7384`}
    }

`;
