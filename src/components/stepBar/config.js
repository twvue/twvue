export default {
    defaultVariant: "primary",
    defaultSize: "sm",
    fixed: {
        root: "flex flex-col items-center gap-2",
        bar:
            "relative w-full flex flex-row justify-between items-center shadow bg-gray-100  rounded-full",
        progress: "absolute z-0 left-0 h-full rounded-full",
        step: "relative z-20 rounded-full shadow font-bold flex items-center justify-center",
        noStep: "bg-gray-100 text-gray-900",
        stepName: "w-full h-max py-2 flex justify-between text-md font-semibold"
    },
    variants: {
        primary: {
            progress: "bg-blue-500 ",
            step: "bg-blue-500 text-white"
        },
        secondary: {
            progress: "bg-gray-500 ",
            step: "bg-gray-500 text-white",
        },
        success: {
            progress: "bg-green-500 ",
            step: "bg-green-500 text-white",
        },
        danger: {
            progress: "bg-red-500 ",
            step: "bg-red-500 text-white",
        },
        warning: {
            progress: "bg-yellow-500 ",
            step: "bg-yellow-500 text-white",
            
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
