import { StyleButton, VariantButton, ButtonSize } from './Button.interface';
import { borderRadius, typography, transitions } from '../../dashboard/styles/tokens';

export const widthStyles = {
    auto: '',
    short: 'w-20',
    default: 'w-36',
    full: 'w-full',
};

export const sizeStyles: Record<ButtonSize, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
};

export const baseStyle = [
    'inline-flex',
    'items-center',
    'justify-center',
    typography.weight.medium,
    borderRadius.lg,
    'focus:outline-none',
    'focus:ring-4',
    'mb-2',
    'me-2',
    'text-center',
    transitions.default,
].join(' ');

export const disabledStyle = 'opacity-50 pointer-events-none cursor-not-allowed';

const solid = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-200',
    secondary: 'text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-200',
    success: 'text-white bg-green-600 hover:bg-green-700 focus:ring-green-200',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-200',
    warning: 'text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-200',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-200',
    light: 'text-gray-900 bg-gray-200 hover:bg-gray-300 focus:ring-gray-100',
    purple: 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-200',
};

const outline = {
    primary: 'text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-200',
    secondary: 'text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-200',
    success: 'text-green-600 border border-green-600 hover:bg-green-600 hover:text-white focus:ring-green-200',
    danger: 'text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-red-200',
    warning: 'text-yellow-600 border border-yellow-600 hover:bg-yellow-500 hover:text-gray-900 focus:ring-yellow-200',
    dark: 'text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-200',
    light: 'text-gray-800 border border-gray-200 hover:bg-gray-200 hover:text-gray-900 focus:ring-gray-100',
    purple: 'text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-200',
};

export const buttonStyles: Record<StyleButton, Record<VariantButton, string>> = {
    solid,
    outline,
};
