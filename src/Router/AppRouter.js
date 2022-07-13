import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MyRoutes } from '../utils/constants';

import About from '../components/Pages/About/About';
import Resume from '../components/Pages/Resume/Resume';
import Projects from '../components/Pages/Projects/Projects';

const AppRouter = (props) => {
    return (
        <Routes>
            {/* Default route */}
            <Route path='*' element={
                <Navigate to={MyRoutes.About} /> 
            } />

            <Route path={MyRoutes.About} element={
                <About />
            } />

            <Route path={MyRoutes.Resume} element={
                <Resume />
            } />

            {/* <Route path={MyRoutes.Projects} element={
                <Projects />
            } /> */}

      </Routes>
    )
}

export default AppRouter;
