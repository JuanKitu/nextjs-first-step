import { StyleButton, VariantButton, ButtonSize } from './Button.interface';
import { colorTokens, borderRadius, typography, transitions } from '../../styles/tokens';

export const widthStyles: Record<'auto' | 'short' | 'default' | 'full', string> = {
    auto: '', // Se ajusta automáticamente al contenido
    short: 'w-20', // Botón más corto
    default: 'w-36', // Botón estándar
    full: 'w-full' // Botón que ocupa el ancho completo del contenedor
};

export const sizeStyles: Record<ButtonSize, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
};

export const iconSizes: Record<ButtonSize, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
};

const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
} as const;

export const baseStyle = [
    'inline-flex',
    'items-center',
    'justify-center',
    typography.weight.medium,
    borderRadius.lg,
    sizes.md, // Tamaño por defecto
    'focus:outline-none',
    'focus:ring-4',
    'mb-2',
    'me-2',
    'text-center',
    transitions.default
].join(' ');


const createVariantStyles = (color: keyof typeof colorTokens) => {
    const token = colorTokens[color];

    return {
        solid: `
      text-${token.text}
      bg-${token.base}-${token.shade.main}
      hover:bg-${token.base}-${token.shade.dark}
      focus:ring-${token.base}-${token.shade.focus}
      dark:bg-${token.base}-${token.shade.light}
      dark:hover:bg-${token.base}-${token.shade.main}
    `.replace(/\s+/g, ' ').trim(),

        outline: `
      text-${token.base}-${token.shade.main}
      border
      border-${token.base}-${token.shade.main}
      hover:bg-${token.base}-${token.shade.main}
      hover:text-${token.text}
      focus:ring-${token.base}-${token.shade.focus}
      dark:border-${token.base}-${token.shade.light}
      dark:text-${token.base}-${token.shade.light}
      dark:hover:bg-${token.base}-${token.shade.light}
    `.replace(/\s+/g, ' ').trim()
    };
};

export const buttonStyles: Record<StyleButton, Record<VariantButton, string>> = {
    solid: {
        primary: createVariantStyles('primary').solid,
        secondary: createVariantStyles('secondary').solid,
        success: createVariantStyles('success').solid,
        danger: createVariantStyles('danger').solid,
        warning: createVariantStyles('warning').solid,
        dark: createVariantStyles('dark').solid,
        light: createVariantStyles('light').solid,
        purple: createVariantStyles('purple').solid,
    },
    outline: {
        primary: createVariantStyles('primary').outline,
        secondary: createVariantStyles('secondary').outline,
        success: createVariantStyles('success').outline,
        danger: createVariantStyles('danger').outline,
        warning: createVariantStyles('warning').outline,
        dark: createVariantStyles('dark').outline,
        light: createVariantStyles('light').outline,
        purple: createVariantStyles('purple').outline,
    }
};

export const disabledStyle = 'opacity-50 pointer-events-none cursor-not-allowed';