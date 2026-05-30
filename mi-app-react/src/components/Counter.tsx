import { useEffect, useState } from "react";

const obtenerMemoria: () => number = () => {
    return Number(sessionStorage.getItem("contador") || 0);
};

const guardarMemoria: (valor: number) => void = (valor) => {
    sessionStorage.setItem("contador", valor.toString());
};

function Counter() {
    const [count, setCount] = useState(obtenerMemoria());
    const ahora = new Date();

    useEffect(() => {
        guardarMemoria(count);
    }, [count]);

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <section>
            <div>{count}</div>
            <button onClick={increment}>incrementar</button>
            <button onClick={decrement}>decrementar</button>
            <div>{ahora.toLocaleTimeString()}</div>
        </section>
    )
}

export default Counter;