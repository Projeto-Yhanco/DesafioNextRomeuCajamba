import {Routes, Route} from 'react-router-dom';
import { Header } from '../layout/header/header';
import {Main} from '../layout/main/main';


export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={Header}>
            <Route path="/" element={Main}/>
            </Route>
        </Routes>
    )
}