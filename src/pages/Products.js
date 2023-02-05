import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1>This is The Product Page</h1>
            <p>Go to <Link to='/'>the Home page</Link>.</p>
        </div>
    )
};
export default Products;