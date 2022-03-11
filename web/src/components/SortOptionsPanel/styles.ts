import styled from 'styled-components';

interface ItemProps {
    selected?: boolean;
}

export const Container = styled.div`
    flex: 1;
    display: flex;
    gap: 4px;
    width: calc(100% - 32px);
    max-width: calc(1200px - 32px);
    margin-top: 16px;

    background: #25292D;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 200px;
    padding: 4px;
`;

export const Item = styled.button<ItemProps>`
    flex: 1;
    background: ${p => p.selected ? 'rgba(11, 13, 16, 0.7)' : 'transparent'};
    color: #DDD;
    border: ${p => p.selected ? '1px solid rgba(255, 255, 255, 0.1)' : 'None'};
    
    padding: 8px;
    border-radius: 20px;

    font-size: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    :hover {
        background: rgba(11, 13, 16, 0.5);
    }
`;