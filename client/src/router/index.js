"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var HomeView_vue_1 = require("../views/HomeView.vue");
var AboutView_vue_1 = require("../views/AboutView.vue");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView_vue_1.default,
        },
        {
            path: '/products',
            name: 'products',
            component: function () { return Promise.resolve().then(function () { return require('../views/ProductList.vue'); }); },
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView_vue_1.default,
        },
        {
            path: '/documentation',
            name: 'documentation',
            component: function () { return Promise.resolve().then(function () { return require('../views/DocumentationView.vue'); }); },
        },
        {
            path: '/contact',
            name: 'contact',
            component: function () { return Promise.resolve().then(function () { return require('../views/ContactView.vue'); }); },
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: function () { return Promise.resolve().then(function () { return require('../views/JobsView.vue'); }); },
        },
        {
            path: '/report-issue',
            name: 'report-issue',
            component: function () { return Promise.resolve().then(function () { return require('../views/ReportIssueView.vue'); }); },
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: function () { return Promise.resolve().then(function () { return require('../views/SignUpView.vue'); }); },
        },
        {
            path: '/log-in',
            name: 'log-in',
            component: function () { return Promise.resolve().then(function () { return require('../views/LogInView.vue'); }); },
        },
    ],
});
exports.default = router;
