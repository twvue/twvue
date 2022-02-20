export default {
    defaultSize: 'md',
    fixed: {
        root: 'fixed flex items-center justify-center z-50 inset-0 min-h-screen overflow-y-auto',
        backdrop: 'absolute inset-0 bg-gray-900 opacity-75',
        wrap: 'bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle',
        title: 'text-lg leading-6 font-medium text-gray-900',
        header: 'bg-gray-50 px-4 py-3 flex items-center justify-between',
        body: 'bg-white p-6',
        footer: 'bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:space-x-3 sm:justify-end',
        btnClose: 'text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg',
    },
    sizes: {
        sm: {
            wrap: 'sm:w-full sm:max-w-sm',
        },
        md: {
            wrap: 'sm:w-full sm:max-w-xl',
        },
        lg: {
            wrap: 'sm:w-full sm:max-w-6xl',
        },
        full: {
            wrap: 'sm:w-full',
        },
    },
};
