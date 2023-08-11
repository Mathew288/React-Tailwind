import { useEffect, useState } from "react";
import { IProducts } from "../../types/Products";
import axios from "axios";

/**Getting all products */
async function fetchProducts(): Promise<IProducts[]> {
    const response = await axios.get("http://localhost:3000/api/products");
    return response.data;
}


export default function ProductCard() {
    const [products, setProducts] = useState<IProducts[]>([]);


    useEffect(() => {
        async  function fetchData() {
            setProducts(await fetchProducts());
        }
        fetchData();

    }, [products]);

    return (
        <div className="w-fit h-fit">

            {
                products.map(product => {
                    return <div key={product.id} className="m-5 p-5 rounded-lg bg-shamrock-400">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                })
            }
        </div>
    );
}

