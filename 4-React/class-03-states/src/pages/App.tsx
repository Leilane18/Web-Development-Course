import { useState } from "react";

export function App() {
    const [count, setCount] = useState(0); //inference
    const [name, setName] = useState("");
    

    function add() {
        setCount( (count) => count + 1);
        setName("Leilane");
    }

    function rem() {
        setCount((count) => count - 1);
    }
    return (
        <>
        <h1>Class States</h1>

        <h2>{name}</h2>
        <p>Count: {count}</p>

        <button onClick={rem}>{"<<"}</button>
        <button onClick={add}>{">>"}</button>
        </>
    );
}