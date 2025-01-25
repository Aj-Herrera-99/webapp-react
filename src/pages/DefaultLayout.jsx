import React from "react";
import HeaderComp from "../components/HeaderComp";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <HeaderComp />
            <main className=" grow px-2 py-4 md:px-[5vw] ">
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;
