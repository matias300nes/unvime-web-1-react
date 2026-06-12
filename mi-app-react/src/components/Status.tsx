import { useEffect, useState } from "react";

const url = "http://localhost:3000/api/status";

export default function Status() {
    const [status, setStatus] = useState("offline");

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setStatus(data.status));
    }, []);

    return (
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-gray-500">{status}</span>
        </div>
    );
};