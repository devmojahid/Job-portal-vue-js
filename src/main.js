import { createApp } from 'vue'
import './style.css'
import Home from "./pages/Home.vue"
import Vacancie from "./pages/Vacancies.vue"
import Posts from "./pages/Posts.vue"
import {createRouter , createWebHashHistory} from "vue-router"
import App from './App.vue'

const routes=[
	{
		path:"/",
		component:Home
	},
	{
		path:"/vacancie",
		component:Vacancie
	},
	{
		path:"/posts",
		component:Posts
	}
]

const router=createRouter({
	history:createWebHashHistory(),
	routes
})


const app = createApp(App);
app.use(router);
app.mount('#app')
