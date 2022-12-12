import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import NavBar from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';



const Navigation = {
    NavItems: [{ name: "Main", path: "/", component: <Home/>, icon: "" },
        { name: "Projects",path:"projects", component: <Projects/>,icon:"" }
    ]
}
const { NavItems } = Navigation;

    function App() {
        return (
            <HashRouter >
                <Routes>
                    <Route path="/" element={<NavBar NavItems={Navigation.NavItems} />} >
                        {
                            NavItems.map(
                                (item: { name: string, path: string, component: JSX.Element }) => <Route key={item.name} path={item.path} element={item.component} />
                            )
                        }
                    </Route>
                </Routes>
            </HashRouter>
        );
    }

export default App;
