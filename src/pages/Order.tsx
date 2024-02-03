import { useParams } from "react-router-dom";

export const Order = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>Order id: {id}</h1>
        </div>
    );
}