import React from "react";
import HeaderComp from "../components/HeaderComp";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <HeaderComp />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;
