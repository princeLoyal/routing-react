import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is The Home Page</h1>
            <p>Go to <Link to='/products'>the Product page</Link>.</p>
        </div>
    );
};
export default Home;