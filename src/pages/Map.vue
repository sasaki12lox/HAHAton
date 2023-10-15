<template>
    <div class="wrapper">
        <yandex-map v-if="!nigde" :coordinates="coords" :settings="settings"></yandex-map>
        <img v-else src="../assets/4x.webp" alt="wires">
    </div>
</template>

<script>
    import * as ymap from 'vue-yandex-maps'

    export default {
        components: { 
            'yandex-map': ymap.YandexMap,
            'ymap-marker': ymap.YandexMarker,
         },
        data: () => ({
            settings: {
                apiKey: '8189c12c-e078-4b58-a48a-4571c53d113f',
            },
            coords: [
                54.82896654088406,
                39.831893822753904,
            ],
            nigde: false
        }),
        async mounted() {
            const gde = await ymap.loadYmap({
                    apiKey: '8189c12c-e078-4b58-a48a-4571c53d113f'
                })
            
            this.nigde = !!gde;
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper img {
        width: 100%;
    }
</style>