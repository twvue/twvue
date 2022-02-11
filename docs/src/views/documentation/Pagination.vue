<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Paginate
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <TWPagination 
                        :current-page="currentPage"
                        :total="total"
                        :per-page="perPage"
                        size="xl"
                        align="center"
                        pills
                        @change="onPageChange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 1,
                total: 15,
                perPage: 5,
            };
        },

        methods: {
            onPageChange(page) {
                this.currentPage = page;
            }
        },
    };
</script>

