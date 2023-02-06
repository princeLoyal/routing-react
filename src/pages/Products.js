import { Link } from "react-router-dom";

const PRODUCT = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'}
];

const Products = () => {
    return (
        <div>
            <h1>This is The Product Page</h1>
           <ul>
           { PRODUCT.map(product => 
                <li key={product.id}>
                    <Link to={product.id}>{product.title}</Link>
                </li>
           )}
           </ul>
        </div>
    );
};
export default Products;