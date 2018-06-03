import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import NewsList from "@/components/NewsList.vue";
import TextInput from "@/components/TextInput.vue";
import UsersList from "@/components/UsersList.vue";
import CounterButton from "@/components/CounterButton.vue";


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: Hello
        },
        {
            path: '/posts',
            name: 'Posts',
            component: NewsList
        },
        {
            path: '/input',
            name: 'Input',
            component: TextInput
        },
        {
            path: '/users',
            name: 'User List',
            component: UsersList
        },
        {
            path: '/counter',
            name: 'Counter Button',
            component: CounterButton
        }
    ]
})