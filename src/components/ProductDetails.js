import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const param = useParams();
    return <>
    <h1>Product Details</h1>
    <p>{param.productId}</p>
    </>
};
export default ProductDetails;