export default {
    defaultVariation: 'primary',
    defaultSize: 'md',
    fixed: {
        root: 'flex items-stretch justify-between relative overflow-hidden w-full shadow-sm disabled:bg-gray-100 rounded-lg',
        text: 'truncate',
        btn: 'flex items-center border-l justify-center flex-shrink-0 text-sm px-2.5',
    },
    variants: {
        primary: {
            root: 'text-gray-800 bg-white placeholder-gray-400 border border-gray-300 focus:border-blue-300 focus:ring focus:ring-opacity-50 focus:ring-blue-200',
            text: '',
            btn: 'bg-gray-200 border-gray-300 text-gray-700 font-medium',
        },
        success: {
            root: 'text-gray-800 bg-white placeholder-gray-400 border border-green-500 focus:border-green-500 focus:ring focus:ring-opacity-50 focus:ring-green-200',
            text: '',
            btn: 'bg-green-200 border-gray-300 text-green-700 font-medium',
        },
        danger: {
            root: 'text-gray-800 bg-white placeholder-gray-400 border border-red-500 focus:border-red-500 focus:ring focus:ring-opacity-50 focus:ring-red-200',
            text: '',
            btn: 'bg-red-200 border-gray-300 text-red-700 font-medium',
        },
        warning: {
            root: 'text-gray-800 bg-white placeholder-gray-400 border border-yellow-500 focus:border-yellow-500 focus:ring focus:ring-opacity-50 focus:ring-yellow-200',
            text: '',
            btn: 'bg-yellow-200 border-gray-300 text-yellow-700 font-medium',
        },
    },
    sizes: {
        sm: {
            root: '',
            text: 'text-sm px-3 py-2',
            btn: '',
        },
        md: {
            root: '',
            text: 'text-sm px-4 py-2',
            btn: '',
        },
        lg: {
            root: '',
            text: 'text-base px-4 py-3',
            btn: '',
        },
    },
};
