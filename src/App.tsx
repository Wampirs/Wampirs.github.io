import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


import NavBar from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';



function App() {
    return (
        <HashRouter >
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path='projects' element={<Projects />} />

                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
