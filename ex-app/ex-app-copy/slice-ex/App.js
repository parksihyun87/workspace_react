import { Route, Routes } from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import List from './List';
import Header from './Header';

export default function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<List/>}></Route>
                    <Route path="/list" element={<List/>}></Route>
                </Route>
            </Routes>
        </>
);
}



