import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { AddWord } from "../components/AddWord";
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { ListWord } from "../components/ListWord";

export const MainRoute = () => {
    const user = useSelector((state: RootState) => state.user.value);

    return (
        <BrowserRouter basename="/english-app/">
            <Routes>
                <Route path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />}>
                    <Route path="addWord" element={<AddWord />} />
                    <Route path="listWord" element={<ListWord />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};