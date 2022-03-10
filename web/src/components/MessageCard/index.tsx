import React from 'react';

import { Container, Date, Header, Type } from './styles';

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
        {text}
    </Container>
  );
}

export default MessageCard;