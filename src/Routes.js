import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWord/HelloWorld';
import Cadastro from './components/Cadastro/Cadastro'

Vue.use(VueRouter)

const router = new VueRouter({
        routes: [
            {
                path: '/teste',
                component: HelloWorld,
                exact: true
            },
            {
                path: '/cadastro',
                component: Cadastro,
                exact: true
            }
        ]
});

export default router;