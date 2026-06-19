import { useEffect, useState } from "react";
import { API_URL } from "../const/api";


type Producto = {
    id: number;
    name: string;
    price: number;
    category_id: number;
    stock: number;
}

type status = "loading" | "success" | "error";

async function fetchProductos() {
    try {
        const response = await fetch(`${API_URL}/productos`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching productos:", error);
        return [];
    }
}

export default function useProductos() {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [status, setStatus] = useState<status>("loading");

    useEffect(() => {
        fetchProductos().then((data) => {
            setProductos(data.data)
            setStatus("success");
        }).catch(() => {
            setStatus("error");
        });
    }, []);

    const refetch = () => {
        setProductos([]);
        setStatus("loading");
        fetchProductos().then((data) => {
            setProductos(data.data)
            setStatus("success");
        }).catch(() => {
            setStatus("error");
        });
    }

    return {
        data: productos,
        status,
        refetch
    };
}