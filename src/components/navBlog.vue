<template>
    <nav class="nav-blog">
        <router-link to="/" exact>Index</router-link>
        <router-link to="/show" exact>All</router-link>
        <router-link to="/add" exact>Add</router-link>
    </nav>
</template>

<script>
export default {
    name: 'nav-blog',
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.nav-blog {
    text-align: center;
    border-bottom: 1px solid #7FDBEC;
    margin-bottom: 20px;
}
nav a {
    text-decoration: none;
    display: inline-block;
    margin: 10px 20px;
    padding: 2px 5px;
    color: #22BAD9;
}
.router-link-active {
    color: #FF8E23;
    border-bottom: 1px solid #FF8E23;
}
</style>

