import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <h1>Root layout</h1>
            <Outlet />
        </>
    );
};
export default RootLayout;