import React from 'react';

import { Container, Item } from './styles';

const SortOptionsPanel: React.FC = () => {
    return (
        <Container>
            <Item selected>Newest</Item>
            <Item>Oldest</Item>
        </Container>
    );
}

export default SortOptionsPanel;