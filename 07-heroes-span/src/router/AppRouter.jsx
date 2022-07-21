import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { DcPages, HeroesRouter, MarvelPage } from "../heroes";
import { Navbar } from "../ui";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = ()=>{
    return (
        <>
            <Routes>
                {/* <Route path="login" element={<LoginPage/>} /> */}
                {/* <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } /> */}

                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRouter />
                    </PrivateRoute>
                }/>

                {/* <Route path="/*" element={<HeroesRouter/>} /> */}
            </Routes>
        </>
    );
}