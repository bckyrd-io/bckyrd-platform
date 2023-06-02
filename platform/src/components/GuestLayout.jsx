import {Outlet} from "react-router-dom";

export default function GuestLayout(){
    return (
        <>
            for guest users only
            <Outlet />
        </>
    )
}