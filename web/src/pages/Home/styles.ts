import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 16px;
`;

export const InputContainer = styled.div`
    position: sticky;
    bottom: 16px;
    display: flex;
    align-items: center;

    padding: 16px;
    margin: 0 16px;
    gap: 16px;

    border-radius: 20px;

    background: rgba(11, 13, 16, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 16px 16px 39px 3px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
    flex: 1;
    background-color: transparent;
    border: none;
    color: #DDD;

    font-size: 16px;
`;