import * as React from 'react';
import { Routes, Route, Router} from "react-router-dom";
import Rankings from './pages/rankings'
import App from './pages/landing'
import About from './pages/about'
import Profile from './pages/profile';

const RouterDom = () => {
 return (
 <Routes>
     <Route path="/" element={<App/>}>
        <Route path="profile">
            <Route path=":userId" element={<Profile/>}/>
            <Route path="*" element={<h1>Error</h1>}/>
        </Route>
     </Route>
     <Route path="about" element={<About/>}/>
    <Route path="rankings" element={<Rankings/>}/>
 </Routes>
 )   
}
export default RouterDom;