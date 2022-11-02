<template>
    <div id="app">
        <SideMenu/>
        <ListComponent/>
    </div>
</template>
<script>
import ListComponent from './components/ListComponent.vue'
import SideMenu from './components/SideMenu.vue'

export default {
    name: 'App',
    components: {
        ListComponent,
        SideMenu,
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
