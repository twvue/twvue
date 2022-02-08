<template>
    <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Variantes</h1>
            <div class="flex flex-col gap-4">
                <h4 class="text-xl font-bold">Primary</h4>
                <TWStepBar variant="primary" :steps="steps" size="md"/>
                <h4 class="text-xl font-bold">Secondary</h4>
                <TWStepBar variant="secondary" :steps="steps2" size="md"/>
                <h4 class="text-xl font-bold">Success</h4>
                <TWStepBar variant="success" :steps="steps3" size="md"/>
                <h4 class="text-xl font-bold">Danger</h4>
                <TWStepBar variant="danger" :steps="steps4" size="md"/>
                <h4 class="text-xl font-bold">Warning</h4>
                <TWStepBar variant="warning" :steps="steps5" size="md"/>
            </div>
        </div>
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Sizes</h1>
            <div class="flex flex-col gap-4">
                <h4 class="text-xl font-bold">sm</h4>
                <TWStepBar variant="primary" :steps="steps" size="sm"/>
                <h4 class="text-xl font-bold">md</h4>
                <TWStepBar variant="primary" :steps="steps2" size="md"/>
                <h4 class="text-xl font-bold">lg</h4>
                <TWStepBar variant="primary" :steps="steps3" size="lg"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'StepBarPage',
    data(){
        return{
            steps: [
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: false
                },
                {
                    name: 'Cadastro',
                    completed: false
                },
                {
                    name: 'Cadastro',
                    completed: false
                },
                {
                    name: 'Cadastro',
                    completed: false
                },

            ],
            steps2: [
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: false
                },
                {
                    name: 'Cadastro',
                    completed: false
                },
                {
                    name: 'Cadastro',
                    completed: false
                },

            ],
            steps3: [
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: false
                },
                {
                    name: 'Cadastro',
                    completed: false
                },
            ],
            steps4: [
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: false
                },


            ],
            steps5: [
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },
                {
                    name: 'Cadastro',
                    completed: true
                },

            ]
        }
    }

}
</script>
