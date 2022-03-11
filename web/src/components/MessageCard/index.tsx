import React from 'react';
import { ActionButton } from '../ActionButton/styles';

import { ButtonsContainer, Container, Date, Header, Type } from './styles';

type MessageProps = {
    text: string;
}

const MessageCard: React.FC<MessageProps> = ({ text }) => {
  return (
    <Container>
        <Header>
            <Type>Text</Type>
            <Date>09/03/2022 - 12:12</Date>
        </Header>
        <p>{text}</p>
        <ButtonsContainer>
          <ActionButton bgColor="#AB4B44">
            Delete
          </ActionButton>
          <ActionButton bgColor="#6C7384">
            More
          </ActionButton>
        </ButtonsContainer>
    </Container>
  );
}

export default MessageCard;