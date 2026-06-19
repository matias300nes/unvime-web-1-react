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

async function fetchProducto(id: number) {
    try {
        const response = await fetch(`${API_URL}/productos/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching producto with id ${id}:`, error);
        return null;
    }
}

export function useProductos() {
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

export function useProducto(id: number | null) {
    const [producto, setProducto] = useState<Producto | null>(null);
    const [status, setStatus] = useState<status>("loading");
    useEffect(() => {
        if(id) {
            fetchProducto(id).then((data) => {
                setProducto(data.data)
                setStatus("success");
            }).catch(() => {
                setStatus("error");
            });
        };
    }, [id]);

    return {
        data: producto,
        status
    };
}