import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to='/'
                    className={({ isActive }) => 
                        isActive? classes.active : undefined
                    }
                    >Home</NavLink></li>
                    <li><NavLink to='/products'
                     className={({ isActive }) => 
                     isActive? classes.active : undefined
                    }>Product</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};
export default Navigation;