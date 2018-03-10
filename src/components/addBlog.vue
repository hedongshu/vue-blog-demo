<template>
    <div class="addBlog">
        <h2>Add Blog</h2>
        <div class="editor" v-if="!blog.isSubmit">
            <form>
                <label>标题:</label>
                <input v-model="blog.title" type="text">
                <br>
                <label>标签:</label>
                <div class="checkDiv" v-for="label in blog.labelList" :key="label">
                    <label>{{ label }}</label>
                    <input type="checkbox" v-model="blog.labelListed" :value="label">
                </div>
                <br>
                <label>作者:</label>
                <select v-model="blog.thisAuthor">
                    <option v-for="author in blog.authors" :key="author" :value="author">{{ author }}</option>
                </select>
                <br>
                <label>内容</label>
                <br>
                <textarea v-model="blog.content"></textarea>
                <br>
                <button @click.prevent="postBlog">添加博客</button>
            </form>
        </div>
        <div v-if="blog.isSubmit">
            <h1>添加博客成功!</h1>
        </div>
        <div class="view">
            <h2>博客预览</h2>
            <p>标题: {{ blog.title }}</p>
            <p>标签: {{ blog.labelListed }}</p>
            <p>作者: {{ blog.thisAuthor }}</p>
            <p>内容:</p>
            <p v-html="compiledMarkdown"></p>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    export default {
        name: "add-blog",
        data() {
            return {
                blog: {
                    labelList: ["node", "vue", "js"],
                    labelListed: [],
                    title: "",
                    content: "",
                    authors: ["南北", "其他人"],
                    thisAuthor: "",
                    isSubmit: false
                }
            };
        },
        methods: {
            postBlog: function () {
                var data = {
                    title: this.blog.title,
                    label: this.blog.labelListed,
                    authors: this.blog.thisAuthor,
                    content: this.blog.content,
                }
                this.axios.post('blogList.json',data).then((res)=>{
                    this.blog.isSubmit = true;
                })
                
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.blog.content, { sanitize: true })
            }
        }
    };

</script>

<style scoped>
    /* .addBlog {
        width: 100%;
        max-width: 700px;
        margin: 10px auto;
    }

    label {
        display: block;
        margin-top: 10px;
    }

    input {
        display: block;
    }

    input[type="text"],
    textarea,
    select {
        display: block;
        width: 100%;
    }

    .checkDiv {
        display: inline-block;
        margin-right: 20px;
    }

    button {
        width: 100%;
        height: 40px;
        border: 0;
        border-radius: 5px;
        background-color: brown;
        color: #fff;
        margin: 10px auto;
        cursor: pointer;
    }

    .view {
        border: 1px dotted #ccc;
        padding: 10px;
    } */

</style>
