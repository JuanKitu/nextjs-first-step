
export const colorTokens = {
    primary: {
        base: 'blue',
        text: 'white',
        shade: {
            light: '500',
            main: '600',
            dark: '700',
            focus: '200'
        }
    },
    secondary: {
        base: 'gray',
        text: 'white',
        shade: {
            light: '500',
            main: '600',
            dark: '700',
            focus: '200'
        }
    },
    success: {
        base: 'green',
        text: 'white',
        shade: {
            light: '500',
            main: '600',
            dark: '700',
            focus: '200'
        }
    },
    danger: {
        base: 'red',
        text: 'white',
        shade: {
            light: '500',
            main: '600',
            dark: '700',
            focus: '200'
        }
    },
    warning: {
        base: 'yellow',
        text: 'gray-900',
        shade: {
            light: '400',
            main: '500',
            dark: '600',
            focus: '200'
        }
    },
    dark: {
        base: 'gray',
        text: 'white',
        shade: {
            light: '700',
            main: '800',
            dark: '900',
            focus: '200'
        }
    },
    light: {
        base: 'gray',
        text: 'gray-900',
        shade: {
            light: '100',
            main: '200',
            dark: '300',
            focus: '200'
        }
    },
    purple: {
        base: 'purple',
        text: 'white',
        shade: {
            light: '500',
            main: '600',
            dark: '700',
            focus: '200'
        }
    }
} as const;

export const spacing = {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
} as const;

export const borderRadius = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
} as const;

export const typography = {
    size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    },
    weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
    },
} as const;

export const transitions = {
    default: 'transition-all duration-150',
    fast: 'transition-all duration-100',
    slow: 'transition-all duration-300',
} as const;