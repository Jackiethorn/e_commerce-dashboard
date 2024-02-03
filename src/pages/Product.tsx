import { useParams } from "react-router-dom";

export const Product = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h2>Product id: {id}</h2>
        </div>
    );
};