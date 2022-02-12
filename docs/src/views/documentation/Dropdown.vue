<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Dropdown
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Variant
                </h4>

                <div class="flex items-center space-x-4">
                    <TWDropdown text="Dropdown">
                        sdsd
                    </TWDropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            drawerAttributes: null,
        };
    },
};
</script>

