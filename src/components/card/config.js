export default {
    defaultVariant: 'secondary',
    fixed: {
        root: 'w-full shadow rounded-lg overflow-hidden',
        header: 'px-4 py-3 flex items-center justify-between',
        headerTitle: 'text-base font-semibold leading-tight',
        body: 'px-4 py-3',
        footer: 'px-4 py-3',
    },
    variants: {
        primary: {
            root: 'text-white bg-blue-500',
            body: '',
        },
        secondary: {
            root: 'bg-white',
            header: 'bg-gray-50',
            body: '',
            footer: 'bg-gray-50',
        },
        success: {
            root: 'text-white bg-green-500',
            body: '',
        },
        danger: {
            root: 'text-white bg-red-500',
            body: '',
        },
        warning: {
            root: 'text-yellow-900 bg-yellow-400',
            body: '',
        },
    },
};
