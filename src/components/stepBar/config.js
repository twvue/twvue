export default {
    defaultVariant: "primary",
    defaultSize: "sm",
    fixed: {
        root: "flex flex-col items-center gap-2",
        bar:
            "relative w-full flex flex-row justify-between items-center shadow bg-gray-100  rounded-full",
        progress: "absolute z-0 left-0 h-full bg-blue-500 rounded-full",
        step: "relative z-20 rounded-full shadow text-white font-bold flex items-center justify-center",
        noStep: "bg-gray-100 text-gray-900",
        stepName: "w-full h-max py-2 flex justify-between text-md font-semibold"
    },
    variants: {
        primary: {
            root: "bg-blue-500 "
        },
        secondary: {
            root: "bg-gray-500 "
        },
        success: {
            root: "bg-green-500 "
        },
        danger: {
            root: "bg-red-500 "
        },
        warning: {
            root: "bg-yellow-500 "
        }
    },
    sizes: {
        sm: {
            bar: "h-1",
            step: "h-6 w-6 text-sm"
        },
        md: {
            bar: "h-3",
            step: "h-8 w-8 text-xl"
        },
        lg: {
            bar: "h-5",
            step: "h-12 w-12 text-3xl"
        }
    }
};
