import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '../components/addBlog'
import showBlogs from '../components/showBlogs'
import thisBlog from '../components/thisBlog'
import modifyBlog from '../components/modifyBlog'
import index from '../components/index'


Vue.use(Router)

export default new Router({
    routes: [{
        	path: '/',
            name: 'index',
            component: index
        },
        {
        	path: '/show',
            name: 'showBlogs',
            component: showBlogs
        },
        {
            path: '/add',
            name: 'addBlog',
            component: addBlog
        },
        {
            path: '/thisBlog/:id',
            name: 'thisBlog',
            component: thisBlog
        },
        {
            path: '/modifyBlog/:id',
            name: 'modifyBlog',
            component: modifyBlog
        },
    ],
    mode: 'history'
})
