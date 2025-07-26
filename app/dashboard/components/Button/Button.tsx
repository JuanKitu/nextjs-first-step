'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '../Spinner/Spinner';
import { ButtonProps } from './Button.interface';
import { baseStyle, buttonStyles, disabledStyle, sizeStyles, widthStyles } from './styles';
import React from 'react';

const renderIcon = (
    loading: boolean,
    icon: React.ReactNode | undefined,
    iconPosition: 'left' | 'right'
) => {
    if (loading) return <Spinner />;
    if (!icon) return null;

    return (
        <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
            {icon}
        </span>
    );
};

const renderContent = (
    children: React.ReactNode,
    loading: boolean,
    icon: React.ReactNode | undefined,
    iconPosition: 'left' | 'right'
) => {
    const iconElement = renderIcon(loading, icon, iconPosition);

    return iconPosition === 'left' ? (
        <>
            {iconElement}
            {children}
        </>
    ) : (
        <>
            {children}
            {iconElement}
        </>
    );
};

export function Button({
                           href,
                           children,
                           className,
                           variant = 'primary', // Default variant
                           styleType = 'solid', // Default style
                           loading = false, // Default: not loading
                           disabled = false, // Default: not disabled
                           icon,
                           iconPosition = 'left', // Default icon position
                           size = 'md', // Default size
                           width = 'auto', // Default width
                           ...props
                       }: ButtonProps) {
    const isDisabled = loading || disabled;

    const classes = twMerge(
        baseStyle, // Base styles
        buttonStyles[styleType]?.[variant] || '', // Style y variant styles dinámicos
        sizeStyles[size], // Tamaño del botón
        widthStyles[width], // Anchura dinámica
        isDisabled ? disabledStyle : '', // Estilos si está deshabilitado
        className // Cualquier clase personalizada
    );

    const content = renderContent(children, loading, icon, iconPosition);

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                aria-disabled={isDisabled}
                onClick={isDisabled ? (e) => e.preventDefault() : undefined}
                tabIndex={isDisabled ? -1 : undefined}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            disabled={isDisabled}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {content}
        </button>
    );
}