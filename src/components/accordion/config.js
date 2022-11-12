export default {
    defaultVariant: "primary",
    defaultSize: "md",
    fixed: {
        root: "bg-white rounded-lg border-2 overflow-hidden",
        header: "p-2 flex justify-between items-center cursor-pointer ",
        tittle: 'text-xl',
        icon: 'w-6 h-6',
        content: {
            fixed: 'transition-all duration-200 px-2 ',
            actived: 'h-max p-2 border-t border-gray-200',
            noActived: 'max-h-0'
        }
    },
    variants: {
        primary: {
            root: "border-blue-500",
            header: 'bg-blue-500',
            tittle: 'text-white',
            icon: "text-white"
        },
        secondary: {
            root: "border-gray-500",
            header: 'bg-gray-500',
            tittle: 'text-white',
            icon: "text-white"
        },
        success: {
            root: "border-green-500",
            header: 'bg-green-500',
            tittle: 'text-white',
            icon: "text-white"
        },
        danger: {
            root: "border-red-500",
            header: 'bg-red-500',
            tittle: 'text-white',
            icon: "text-white"
        },
        warning: {
            root: "border-yellow-500",
            header: 'bg-yellow-500',
            tittle: 'text-white',
            icon: "text-white"
        },
        ghost:{
            root: "border-gray-200 text-black",
            header: 'bg-transparent',
            tittle: 'text-black',
            icon: "text-black"
        }
    },
    sizes: {
        sm: {
            root: 'w-72'
        },
        md: {
            root: 'w-96'
        },
        lg: {
            root: 'w-auto'
        }
    }
};
