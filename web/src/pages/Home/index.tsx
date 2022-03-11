import React, { useState } from 'react';
import MessageCard from '../../components/MessageCard';
import { FiPaperclip, FiSend, FiX } from 'react-icons/fi';

import { ActionsContainer, CardsContainer, Container, Header, Input, InputContainer, Title } from './styles';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ActionButton } from '../../components/ActionButton/styles';
import SortOptionsPanel from '../../components/SortOptionsPanel';
import IconButton from '../../components/IconButton';

type Message = {
    ID: number;
		TYPE_ID: number;
		DATE_CREATED: Date;
		TEXT_MESSAGE: string;
		MEDIA_ID: number;
}

const Home: React.FC = () => {
    const [message, setMessage] = useState("");

    const { data: messages, isFetching } = useQuery<Message[]>('messages', async () => {
        const response = await axios.get('http://localhost:8000/messages');
    
        return response.data;
      })

    return (
        <Container>
            <Header>
                <Title>Files HUB</Title>
                <ActionsContainer>
                    <ActionButton bgColor="#6C7384" header>
                        Search
                    </ActionButton>
                    <ActionButton bgColor="#44AB80" header>
                        Add
                    </ActionButton>
                </ActionsContainer>
            </Header>
            <SortOptionsPanel>

            </SortOptionsPanel>
            <CardsContainer>
                { messages?.map(message => (
                    <MessageCard key={message.ID} text={message.TEXT_MESSAGE} />
                )) }
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
                <MessageCard text="TESTE" />
            </CardsContainer>
            <InputContainer>
                <Input
                    placeholder="Quick message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {message.length > 0 &&
                    <IconButton Icon={FiX} size={16} simple onClick={() => setMessage("")}/>
                }

                <IconButton Icon={FiSend} simple size={20} />
            </InputContainer>
        </Container>
    );
}

export default Home;