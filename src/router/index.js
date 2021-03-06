import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import Column from "../views/Column.vue";
Vue.use(Router);

export default new Router({
  mode:'history',
  routes:[
      {
        path: "/gnaseel",
        name: "Home",
        component: Home
      },
      {
        path: "/gnaseel/Projects",
        name: "Projects",
        component: Projects
      },
      {
        path: "/gnaseel/About",
        name: "About",
        component: About
      },
      {
        path: "/gnaseel/Column",
        name: "Column",
        component: Column
      },
  ]
});