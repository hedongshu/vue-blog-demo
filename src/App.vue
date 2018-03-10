<template>
    <div id="app">
        <div id="main">
            <nav-blog></nav-blog>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import navBlog from './components/navBlog'
    export default {
        name: 'App',
        components: {
            navBlog,
        }
    }
</script>

<style>
    
</style>
