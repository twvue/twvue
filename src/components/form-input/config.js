export default {
    defaultVariation: 'primary',
    defaultSize: 'md',
    fixed: {
        root: 'block w-full transition ease-in-out focus:outline-none shadow-sm duration-150 disabled:bg-gray-100 disabled:text-gray-500 rounded-lg',
    },
    variants: {
        primary: {
            root: 'text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-700 placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:border-blue-300 focus:ring focus:ring-opacity-50 focus:ring-blue-200',
        },
        success: {
            root: 'text-gray-900 bg-white placeholder-gray-400 border border-green-500 focus:border-green-500 focus:ring focus:ring-opacity-50 focus:ring-green-200',
        },
        danger: {
            root: 'text-gray-900 bg-white placeholder-gray-400 border border-red-500 focus:border-red-500 focus:ring focus:ring-opacity-50 focus:ring-red-200',
        },
        warning: {
            root: 'text-gray-900 bg-white placeholder-gray-400 border border-yellow-500 focus:border-yellow-500 focus:ring focus:ring-opacity-50 focus:ring-yellow-200',
        },
    },
    sizes: {
        sm: 'text-sm px-3 py-2 leading-4',
        md: 'text-sm px-4 py-3',
        lg: 'text-base px-4 py-3.5',
    },
};
