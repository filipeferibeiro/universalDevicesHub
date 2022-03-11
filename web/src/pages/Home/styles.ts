import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardsContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 16px;


    padding: 16px;
    margin-bottom: 16px;
`;

export const InputContainer = styled.div`
    position: sticky;
    bottom: 16px;
    display: flex;
    align-items: center;
    width: calc(100% - 32px);
    max-width: 1200px;

    padding: 16px;
    margin: 0 16px;
    gap: 18px;

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

export const Header = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 24px;
    margin: 0 16px;
    gap: 16px;

    background: rgba(11, 13, 16, 0.7);
    backdrop-filter: blur(10px);
`;

export const ActionsContainer = styled.div`
    display: flex;
    gap: 16px;
`;

export const Title = styled.p`
    font-size: 18px;
`;