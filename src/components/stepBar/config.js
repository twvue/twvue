export default {
    defaultVariant: "primary",
    defaultSize: "sm",
    fixed: {
        root: "flex flex-col items-center gap-2",
        containerBar: 'relative w-full flex flex-row justify-between items-center shadow bg-gray-100  rounded-full',
        progress: 'absolute z-0 left-0 h-full bg-blue-500 rounded-full',
        containerStep: 'relative w-max z-20 rounded-full shadow text-lg font-bold',
        containerName: 'w-full h-max py-2 flex justify-between text-md font-semibold'
    },
    variants: {
        primary: {
            root: "bg-blue-500 ",

        },
        secondary: {
            root: "bg-gray-500 ",

        },
        success: {
            root: "bg-green-500 ",

        },
        danger: {
            root: "bg-red-500 ",

        },
        warning: {
            root: "bg-yellow-500 ",

        }
    },
    sizes: {
        sm: {
            bar: "h-1",
            step: 'px-2'
        },
        md: {
            bar: "h-3",
            step: 'px-3 py-1'
        },
        lg: {
            bar: "h-5",
            step: 'px-5 py-2'
        }
    }
};
