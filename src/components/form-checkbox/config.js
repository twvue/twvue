export default {
    defaultVariant: 'primary',
    defaultSize: 'md',
    fixed: {
        root: 'inline-flex justify-start items-center',
        handler: 'border-2 rounded lex flex-shrink-0 justify-center items-center cursor-pointer',
        label: 'text-sm ml-2',
    },
    variants: {
        primary: {
            handler: {
                checked: 'text-white bg-blue-600 border-blue-600',
                unchecked: 'bg-white border-gray-300',
                disabled: 'bg-gray-50 border-gray-200',
            },
            label: {
                checked: 'text-gray-800',
                unchecked: 'text-gray-800',
                disabled: 'text-gray-500',
            },
        },
        secondary: {
            handler: {
                checked: 'text-white bg-gray-400 border-gray-400',
                unchecked: 'bg-white border-gray-300',
                disabled: 'bg-gray-50 border-gray-200',
            },
            label: {
                checked: 'text-gray-800',
                unchecked: 'text-gray-800',
                disabled: 'text-gray-500',
            },
        },
        success: {
            handler: {
                checked: 'text-white bg-green-500 border-green-500',
                unchecked: 'bg-white border-gray-300',
                disabled: 'bg-gray-50 border-gray-200',
            },
            label: {
                checked: '',
                unchecked: 'text-gray-700',
                disabled: 'text-gray-500',
            },
        },
        danger: {
            handler: {
                checked: 'text-white bg-red-500 border-red-500',
                unchecked: 'bg-white border-gray-300',
                disabled: 'bg-gray-50 border-gray-200',
            },
            label: {
                checked: 'text-gray-800',
                unchecked: 'text-gray-800',
                disabled: 'text-gray-500',
            },
        },
        warning: {
            handler: {
                checked: 'text-white bg-yellow-500 border-yellow-500',
                unchecked: 'bg-white border-gray-300',
                disabled: 'bg-gray-50 border-gray-200',
            },
            label: {
                checked: 'text-gray-800',
                unchecked: 'text-gray-800',
                disabled: 'text-gray-500',
            },
        },
    },
    sizes: {
        sm: {
            root: '',
            handler: 'p-0.5 h-5 w-5',
            label: '',
        },
        md: {
            root: '',
            handler: 'p-1 w-6 h-6',
            label: '',
        },
        lg: {
            root: '',
            handler: 'p-1 h-8 w-8',
            label: '',
        },
    },
};
