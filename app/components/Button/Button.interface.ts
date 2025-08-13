import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

export type StyleButton = 'solid' | 'outline';
export type VariantButton =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'dark'
    | 'light'
    | 'purple';

export type IconPosition = 'left' | 'right';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BaseButtonProps {
    variant?: VariantButton;
    styleType?: StyleButton;
    loading?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    width?: 'auto' | 'short' | 'default' | 'full';
    iconPosition?: IconPosition;
    className?: string;
    size?: ButtonSize;
    children?: React.ReactNode;
}

export type ButtonProps = BaseButtonProps &
    (
        | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
        | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    );