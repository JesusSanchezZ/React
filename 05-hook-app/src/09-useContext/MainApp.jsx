import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage } from '../09-useContext';

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="about" element={ <AboutPage /> } />
                <Route path="login" element={ <LoginPage /> } />

                {/* <Route path="/*" element={ <LoginPage/> } /> */}
                <Route path="/*" element={ <Navigate to="/about" /> } />
            </Routes>
        </>
    );
}