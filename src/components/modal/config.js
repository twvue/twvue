export default {
    defaultSize: 'md',
    fixed: {
        backdrop: 'bg-gray-700 bg-opacity-50',
        panel: 'bg-white rounded-lg text-left overflow-hidden shadow-xl',
        header: 'bg-gray-50 px-4 py-3 flex items-center justify-between',
        title: 'text-lg leading-6 font-medium text-gray-900',
        body: 'bg-white p-6',
        footer: 'bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:space-x-3 sm:justify-end',
        btnClose: 'text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg',
    },
    sizes: {
        sm: {
            panel: 'sm:w-full sm:max-w-sm',
        },
        md: {
            panel: 'sm:w-full sm:max-w-xl',
        },
        lg: {
            panel: 'sm:w-full sm:max-w-6xl',
        },
        full: {
            panel: 'sm:w-full',
        },
    },
};
