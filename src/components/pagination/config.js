export default {
    defaultSize: 'sm',
    fixed: {
        root: 'flex items-center justify-center my-3',
        containerButtons: 'flex-1 flex justify-between sm:hidden',
        buttonClass: 'relative inline-flex items-center px-4 py-2 border border-blue-gray300 text-sm leading-5 font-medium rounded-md text-blue-gray700 bg-white hover:text-blue-gray500 focus:outline-none  focus:border-blue-300 active:bg-blue-gray100 active:text-blue-gray700 transition ease-in-out duration-150',
        containerArrow: 'hidden sm:inline-flex inline-flex shadow-sm',
        buttonArrowRoot: 'relative inline-flex items-center px-2 py-2 bg-white border text-sm leading-5 font-medium focus:z-10 hover:z-10 focus:outline-none transition ease-in-out duration-150',
    },
    sizes: {
        xs: 'h-2 w-2',
        sm: 'h-5 w-5',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-14 w-14',
    },
};
