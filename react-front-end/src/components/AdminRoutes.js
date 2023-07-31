import React from "react";
import {Routes, Route, redirect} from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function AdminRoutes({component: Component, ...rest}) {
    return (
        <>
        <Routes>
            <Route
            {...rest}
            render={(props) => {
                const token = cookies.get("TOKEN");
                if (token) {
                    return <Component {...props} />;
                }
                else {
                    return (
                        <redirect to={{
                            pathname: "/",
                            state: {
                                from: props.location,
                            },
                        }} />
                    );
                }
            } } 
            />
        </Routes>
        </>
    )
}