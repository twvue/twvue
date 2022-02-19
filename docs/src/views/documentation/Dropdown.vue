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

                <div class="overflow-hidden flex items-center space-x-4">
                    <TWDropdown text="Primary">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Secondary" variant="secondary">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Success" variant="success">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Danger" variant="danger">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Warning" variant="warning">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="overflow-hidden flex items-center space-x-4">
                    <TWDropdown text="Extra small" size="xs">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Small" size="sm">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Medium" size="md">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Large" size="lg">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>

                    <TWDropdown text="Extra large" size="xl">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Divider
                </h4>

                <div class="overflow-hidden flex items-center space-x-4">
                    <TWDropdown text="Divider">
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownDivider />
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Only icon (in progress)
                </h4>

                <div class="overflow-hidden flex items-center space-x-4">
                    <TWDropdown>
                        <TWDropdownItem>Item 1</TWDropdownItem>
                        <TWDropdownItem>Item 2</TWDropdownItem>
                        <TWDropdownDivider />
                        <TWDropdownItem>Item 3</TWDropdownItem>
                        <TWDropdownItem>Item 4</TWDropdownItem>
                    </TWDropdown>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Router
                </h4>

                <div class="overflow-hidden flex items-center space-x-4">
                    <TWDropdown text="Router link">
                        <TWDropdownItem tag="RouterLink" to="alert">Alert</TWDropdownItem>
                        <TWDropdownItem tag="RouterLink" to="avatar">Avatar</TWDropdownItem>
                        <TWDropdownItem tag="RouterLink" to="button">Button</TWDropdownItem>
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
    }
};
</script>

