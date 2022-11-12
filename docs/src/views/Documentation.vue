<template>
    <div class="">
        <div class="space-x-4 text-sm pb-1">
            <RouterLink
                v-for="nav in menu"
                :key="nav.label"
                :to="nav.to"
                class="border-b-2 p-1"
                :class="{
                    'font-medium border-blue-600': nav.to === $route.fullPath,
                    'border-white': nav.to !== $route.fullPath
                }"
            >
                {{ nav.label }}
            </RouterLink>
        </div>
        <div>
            <div class="flex-1 pt-2">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Documentation",
    data() {
        return {
            menu: [
                { label: "Accordion", to: "/documentation/accordion" },
                { label: "Alert", to: "/documentation/alert" },
                { label: "Avatar", to: "/documentation/avatar" },
                { label: "Button", to: "/documentation/button" },
                { label: "Button close", to: "/documentation/button-close" },
                { label: "Card", to: "/documentation/card" },
                { label: "Form", to: "/documentation/form" },
                { label: "Help text", to: "/documentation/help-text" },
                { label: "Modal", to: "/documentation/modal" },
                { label: "Progress Bar", to: "/documentation/progressBar" },
                { label: "Spinner", to: "/documentation/spinner" },
                { label: "Step Bar", to: "/documentation/stepBar" },
                { label: "Tab", to: "/documentation/tab" },
                { label: "Tag", to: "/documentation/tag" },
                
            ],
            selected: false
        };
    }
};
</script>
