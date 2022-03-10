import React, { useState } from 'react';
import MessageCard from '../../components/MessageCard';
import { FiPaperclip, FiSend, FiX } from 'react-icons/fi';

import { CardsContainer, Container, Input, InputContainer } from './styles';
import axios from 'axios';
import { useQuery } from 'react-query';

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
                <FiPaperclip color="#DDD" size={20} />
                <Input
                    placeholder="Digite uma mensagem..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {message.length > 0 &&
                    <FiX color="#DDD" size={16} />
                }

                <FiSend color="#DDD" size={20} />

            </InputContainer>
        </Container>
    );
}

export default Home;