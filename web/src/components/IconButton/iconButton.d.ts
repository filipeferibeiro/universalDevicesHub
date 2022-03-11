import { IconBaseProps } from "react-icons";

interface IconButtonProps {
    Icon: React.FC<IconBaseProps>;
    size: number;
    simple?: boolean;
}

interface IconButtonStyleProps {
    size: number;
    simple?: boolean;
}