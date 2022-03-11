import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background: #25292D;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 16px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 16px;

    @media (min-width: 800px) {
        flex: 1;
        justify-content: flex-end;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;
`;

export const Type = styled.p`
    background: #4462AB;
    padding: 2px 8px;
    border-radius: 200px;

    font-size: 14px;
    font-weight: 500;
`;

export const Date = styled.p`

`;