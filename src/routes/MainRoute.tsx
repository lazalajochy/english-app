import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';


export const MainRoute = () => {
    const user = useSelector((state: RootState) => state.user.value);

    return (
        <BrowserRouter basename="/english-app/">
            <Routes>
                <Route path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard/" element={user ? <Dashboard /> : <Navigate to="/" />}>
                  
                </Route>
            </Routes>
        </BrowserRouter>
    );
};