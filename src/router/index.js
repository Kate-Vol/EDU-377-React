import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import {Navigate, Route} from "react-router-dom";
import Error from "../pages/Error";
import React from "react";

export const routes = [
    {path:'/about', component: About, exact:true},
    {path:'/posts', component: Posts, exact:true},
    {path:'/posts/:id', component: PostIdPage, exact:true}
]
