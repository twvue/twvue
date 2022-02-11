export default {
    defaultVariant: 'primary',
    defaultSize: 'sm',
    fixed: {
        root: 'flex justify-start items-start',
        handler: 'bg-white border-2 rounded border-gray-300 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500',
        svgRoot: 'fill-current hidden text-green-500 pointer-events-none',
    },
    sizes: {
        sm: {
            handler: 'h-5 w-5',
            svg: 'h-3 w-3',
        },
        md: {
            handler: 'w-6 h-6',
            svg: 'w-4 h-4',
        },
        lg: {
            handler: 'h-8 w-8',
            svg: 'h-6 w-6',
        },
    },

       /*variants: {
        primary: {
            root: {
                enabled: 'bg-blue-600',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        secondary: {
            root: {
                enabled: 'bg-gray-400',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        success: {
            root: {
                enabled: 'bg-green-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        danger: {
            root: {
                enabled: 'bg-red-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
        warning: {
            root: {
                enabled: 'bg-yellow-500',
                disabled: 'bg-gray-200',
            },
            handler: {
                enabled: 'bg-white',
                disabled: 'bg-white',
            },
        },
    },*/
};
