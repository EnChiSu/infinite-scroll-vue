<template>
    <div id="app">
        <ListComponent/>
    </div>
</template>
<script>
import ListComponent from './components/ListComponent.vue'
export default {
    name: 'App',
    components: {
        ListComponent
    }
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
html, body {
    background-color: #D3D3D3;
}
</style>
