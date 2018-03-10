<template>
    <div class="showBlogs">
        <h1>All Blogs</h1>
        <input v-model="searchText" class="search" type="text" placeholder="请输入搜索内容">
        <article v-for="blog in search" :key="blog.id" id="singleBlog">
            <router-link :to="/thisBlog/ + blog.id">
                <h2>{{ blog.title }}</h2>
            </router-link>
            <!-- <p>{{ blog.content | sliceText}}</p> -->
            <p class="content">{{ blog.content }}</p>
        </article>
    </div>
</template>

<script>
    import marked from 'marked'
    export default {
        name: 'show-blogs',
        data() {
            return {
                blogsList: [],
                searchText: '',
            }
        },
        mounted() {
            this.axios.get('blogList.json').then((res) => {
                return res.data
            }).then((data) => {
                var list = []
                for(let key in data) {
                    data[key].id = key
                    list.push(data[key])
                    this.blogsList = list
                }
                
            })
        },
        methods: {

        },
        computed: {
            search: function () {
                return this.blogsList.filter((blog)=>{
                    var title = blog.title.toUpperCase()
                    return title.match(this.searchText.toUpperCase())
                })
            },
        },
        filters: {
            sliceText: function (val) {
                var compiledMarkdown = marked(val, { sanitize: true })
                return compiledMarkdown.slice(0, 100) + '...'
            }
        }
    }

</script>

<style>
    .content {
        text-overflow:ellipsis;
        overflow:hidden;
        max-height: 45px;
        display:-webkit-box;
        overflow:hidden;
        text-overflow:ellipsis;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
    }
    /* .showBlogs {
        width: 700px;
        margin: 10px auto;
    }

    article {
        background-color: #ccc;
        padding: 10px;
        margin-top: 10px;
        box-sizing: border-box;
    }

    .search {
        width: 100%;
        height: 30px;
        border: 1px dotted #ccc;
        padding-left: 10px;
        box-sizing: border-box;
    } */

</style>
