import { useInsertionEffect, useState } from "react";
import { IProducts } from "../../types/Products";

async function fetchProducts(): Promise<IProducts[]> {

    const response = await fetch('http://localhost:3000/api/products');
    const data: IProducts[] = await response.json();

    return data;
}


export default function ProductCard() {
    const [products, setProducts] = useState<IProducts[]>([]);
    

    useInsertionEffect(()=>{
        async function fetchData() {
            const result = await fetchProducts();
            setProducts(result);
        }
        fetchData();
    },[]);


    return (
    <div>
        {
            products.map(product=>{
                return <div>
                    {product.name}
                </div>
            })
        }
    </div>
    );
}

