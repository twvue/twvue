<template>
    <div class="flex flex-col gap-4">
        <h1 class="text-bold font-mono text-3xl">Primary</h1>
        <TWAccordion variant="primary">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>
        
        <h1 class="text-bold font-mono text-3xl">secondary</h1>
        <TWAccordion variant="secondary">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>

        <h1 class="text-bold font-mono text-3xl">Success</h1>
        <TWAccordion variant="success">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>

        <h1 class="text-bold font-mono text-3xl">Danger</h1>
        <TWAccordion variant="danger">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>

        <h1 class="text-bold font-mono text-3xl">Warning</h1>
        <TWAccordion variant="warning">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>
        
        <h1 class="text-bold font-mono text-3xl">Ghost</h1>
        <TWAccordion variant="ghost">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>

        <br>
        <h1>Sm</h1>
        <TWAccordion variant="primary" size="sm">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>

        <h1>md</h1>
        <TWAccordion variant="primary" size="md">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>

        <h1>lg</h1>
        <TWAccordion variant="primary" size="lg">
            <TWAccordionTittle slot="tittle">Title</TWAccordionTittle>
            <TWAccordionContent slot="content">Content</TWAccordionContent>
        </TWAccordion>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>