import React from "react";
import HeaderComp from "../components/HeaderComp";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <HeaderComp />
            <main className=" grow p-4 md:px-[10vw] ">
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;
