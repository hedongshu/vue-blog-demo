<template>
    <div class="this-blog">
        <h2>{{ this.blog.title }}</h2>
        <p>作者: {{ this.blog.authors }}</p>
        <p>标签:
            <span v-for="item in this.blog.label" :key="item">
                {{ item }}
            </span>
        </p>
        <div class="markedHtml" v-html="compiledMarkdown"></div>
        <div class="modify">
            <button @click='deleteBlog()'>删除博客</button>
            <button><router-link :to="/modifyBlog/ + this.id">修改博客</router-link></button>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    export default {
        name: 'this-blog',
        data() {
            return {
                id: this.$route.params.id,
                blog: {},
            }
        },
        created() {
            this.axios.get('blogList/' + this.id + '.json').then((res) => {
                this.blog = res.data
                console.log(this.id)
            })
        },
        methods: {
            deleteBlog: function () {
                if (confirm('是否删除该博客内容?')) {
                    this.axios.delete('blogList/' + this.id + '/.json').then((res) => {
                        alert('删除成功!')
                        this.$router.push({path: '/', replace: true})
                    })
                }
            }
        },
        computed: {
            compiledMarkdown: function () {
                if (this.blog.content != undefined) {
                    return marked(this.blog.content, { sanitize: true })
                }
                
            }
        }
    }

</script>

<style scoped>
    /* .this-blog {
        max-width: 700px;
        box-sizing: border-box;
        margin: 10px auto;
    }
    .modify {
        text-align: center;
    }
    .modify a {
        text-decoration: none;
        color: #fff;
    }
    .modify button {
        box-sizing: border-box;
        outline: none;
        width: 70px;
        height: 40px;
        background-color: brown;
        color: #fff;
        padding: 10px;
    } */
</style>
