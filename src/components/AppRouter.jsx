import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/posts' replace />} />
            <Route path='/about' element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
            <Route exact path='/posts/:id' element={<PostIdPage />} />

            {/*{routes.map(route =>*/}
            {/*    <Route*/}
            {/*        element={route.component}*/}
            {/*        path={route.path}*/}
            {/*    />*/}
            {/*)}*/}
            <Route path='/error' element={<Error />} />
            <Route path='/*' element={<Navigate to='/error/' replace />} />
        </Routes>
    );
};

export default AppRouter;