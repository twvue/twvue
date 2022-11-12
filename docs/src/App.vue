<template>
    <div id="app">
        <div class="">
            <div class="w-full px-12 py-4 space-x-4 flex flex-row items-center  ">
                <img src="../src/assets/images/twvue_bgTransparent.png" alt="logo" height="75" width="50">
                <router-link v-for="(nav, index) in menu" :key="index" :to="nav.to" :class="['p-2 rounded-lg bg-sky-500/50', {'bg-blue-100 text-blue-500': nav.to === $route.matched[0].path || nav.to === $route.fullPath}]">{{nav.label}}</router-link>
            </div>
            
        </div>

        <div class="px-12 mx-auto px-4">
            <RouterView />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    { label: 'Home', to: '/' },
                    { label: 'Documentation', to: '/documentation' },
                ],
            };
        },
    };
</script>
