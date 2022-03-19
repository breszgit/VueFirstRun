//--Global--
import { createWebHistory, createRouter } from "vue-router"

//--Layout--
import MainLayout from "@/layouts/MainLayout";
import MovieLayout from "@/layouts/MovieLayout";

//--Pages--
const MyPage =()=> import("@/pages/MyPage");
const TestPage =()=> import("@/pages/TestPage");
const MoviePage =()=> import("@/pages/MoviesPage");
const MovieDetailPage =()=> import("@/pages/MovieDetailPage");

//--GroupPage--
let mainPages = {
    path:'/',
    component: MainLayout,
    name:'MyPage',
    children:[
        {
            path: '/',
            name: 'A',
            component: MyPage
        },
        {
            path: '/Test',
            name: 'B',
            component: TestPage
        }
    ]
}

let moviePages ={
    path:'/Movies',
    component: MovieLayout,
    name:'Movies',
    children:[
        {
            path: '/Movies',
            name: 'C',
            component: MoviePage
        },
        {
            path: '/Movie/:Name/:Number',
            name: 'D',
            component: MovieDetailPage
        }
    ]
}

//--Routes--
const routes = [
    mainPages,
    moviePages
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;