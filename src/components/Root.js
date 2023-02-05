import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import classes from './Root.module.css';

const Root = () => {
    return (
        <>
           <Navigation />
           <main className={classes.content}>
                <Outlet />
           </main>
        </>
    );
};
export default Root;