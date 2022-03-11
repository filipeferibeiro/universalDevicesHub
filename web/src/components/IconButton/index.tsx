import React from 'react';
import { IconButtonProps } from './iconButton';

import { Container } from './styles';

const IconButton: React.FC<IconButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ Icon, size, simple, ...rest }: IconButtonProps) => {
    return (
        <Container size={size} simple={simple} {...rest}>
            <Icon color="#DDD" size={size} />
        </Container>
    );
}

export default IconButton;