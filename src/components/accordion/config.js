export default {
    defaultVariant: "primary",
    defaultSize: "md",
    fixed: {
        root: "bg-white rounded-lg border-2 overflow-hidden",
        header: "text-white p-2 flex justify-between items-center cursor-pointer",
        content: {
            fixed: 'transition-all duration-200 px-2',
            actived: 'h-max p-2',
            noActived: 'max-h-0'
        }
    },
    variants: {
        primary: {
            root: "border-blue-500",
            header: 'bg-blue-500',
        },
        secondary: {
            root: "border-gray-500",
            header: 'bg-gray-500',
        },
        success: {
            root: "border-green-500",
            header: 'bg-green-500',
        },
        danger: {
            root: "border-red-500",
            header: 'bg-red-500',
        },
        warning: {
            root: "border-yellow-500",
            header: 'bg-yellow-500',
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
